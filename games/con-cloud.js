// STEP 20: Google 계정별 콘 동기화 (Firebase Spark)
import { initializeApp, getApps, getApp } from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js';
import { getFirestore, doc, getDoc, runTransaction, serverTimestamp } from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js';
const config = {apiKey:'AIzaSyB0iHUdxg0dCv-TjvusjJjOt_scngwLZE8',authDomain:'game-library-7e014.firebaseapp.com',projectId:'game-library-7e014',storageBucket:'game-library-7e014.firebasestorage.app',messagingSenderId:'780822464752',appId:'1:780822464752:web:6c1306decb5db7e9669a35',measurementId:'G-7E9DK299B9'};
const app = getApps().length ? getApp() : initializeApp(config);
const auth = getAuth(app), db = getFirestore(app);
const OWNED_KEY = 'ownedCons', DAILY_KEY = 'conGachaLastSuccessfulDrawKST';
const MIGRATED_KEY = 'gameLibraryStep20Migration:';
export function kstDate(){const parts=new Intl.DateTimeFormat('en-US',{timeZone:'Asia/Seoul',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date());const part=k=>parts.find(p=>p.type===k).value;return `${part('year')}-${part('month')}-${part('day')}`;}
export function validCons(ids){const allowed=new Set((typeof CON_LIST==='undefined'?[]:CON_LIST).map(c=>c.id));return [...new Set(Array.isArray(ids)?ids:[])].filter(x=>typeof x==='string'&&allowed.has(x));}
export function localOwned(){try{return validCons(JSON.parse(localStorage.getItem(OWNED_KEY)||'[]'));}catch{return [];}}
export function localDate(){return localStorage.getItem(DAILY_KEY)||'';}
export function cacheState(s){localStorage.setItem(OWNED_KEY,JSON.stringify(s.ownedCons||[]));if(s.lastDrawKST)localStorage.setItem(DAILY_KEY,s.lastDrawKST);else localStorage.removeItem(DAILY_KEY);}
export function waitForGoogle(){return new Promise(resolve=>{const unsub=onAuthStateChanged(auth,user=>{unsub();resolve(user&&!user.isAnonymous?user:null);},()=>resolve(null));});}
export async function loadCloud(user){const ref=doc(db,'users',user.uid);const snap=await getDoc(ref);const d=snap.exists()?snap.data():{};return {ownedCons:validCons(d.ownedCons),lastDrawKST:d.lastDrawKST||''};}
// 최초 1회 기존 브라우저 기록 이전. 서버에서 기존 획득 여부를 검증할 수 없음.
export async function migrateOnce(user){
 const key=MIGRATED_KEY+user.uid;
 if(localStorage.getItem(key)==='done')return loadCloud(user);
 const oldOwned=localOwned(), oldDate=localDate(), ref=doc(db,'users',user.uid);
 await runTransaction(db,async tx=>{
  const snap=await tx.get(ref);if(!snap.exists())throw new Error('먼저 메인 페이지에서 닉네임을 설정해 줘.');
  const d=snap.data();
  if(d.legacyImported===true)return;
  const merged=validCons([...(Array.isArray(d.ownedCons)?d.ownedCons:[]),...oldOwned]);
  const lastDrawKST=[d.lastDrawKST||'',/^\d{4}-\d{2}-\d{2}$/.test(oldDate)?oldDate:''].sort().at(-1);
  tx.update(ref,{ownedCons:merged,lastDrawKST,legacyImported:true});
 });
 localStorage.setItem(key,'done');const s=await loadCloud(user);cacheState(s);return s;
}
// 착지한 칸이 미획득 콘일 때만 트랜잭션으로 뽑기 기록을 확정
export async function claimCon(user,conId){
 const today=kstDate(), ref=doc(db,'users',user.uid);
 const result=await runTransaction(db,async tx=>{
  const snap=await tx.get(ref);if(!snap.exists())throw new Error('닉네임을 먼저 설정해 줘.');
  const d=snap.data(), owned=validCons(d.ownedCons);
  if(d.lastDrawKST===today)return {ok:false,reason:'today'};
  if(owned.includes(conId))return {ok:false,reason:'owned'};
  if(!validCons([conId]).length)throw new Error('등록되지 않은 콘이야.');
  const next={ownedCons:[...owned,conId],lastDrawKST:today};
  tx.update(ref,next);return {ok:true,state:next};
 });
 if(result.ok)cacheState(result.state);
 return result;
}
