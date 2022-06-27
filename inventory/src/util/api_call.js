import {addDoc, collection, where,query, getDocs, deleteDoc, doc } from 'firebase/firestore';
import {db} from '../db/config';
const addItem =async(itemname , qty='kg' , price=0.0 , count =0)=>{
    const itemRef = collection(db , 'items');
    try{
        const addedItem = await addDoc(itemRef, {
            itemname , 
            qty ,
            count ,
            price
        });
        console.log(addedItem.id,'==> Added ');
    }
    catch(e){
        console.log(e);
    }
}

const deleteItemByName=async(itemname)=>{
    const itemRef = collection(db,"items");
    const q = query(itemRef , where("itemname","==",itemname));
    const snapshot = await getDocs(q);
    snapshot.forEach(async(d)=>{
        console.log('deleting ==> ',d.id,':',itemname);
        await deleteDoc(doc(db,"items",d.id));
    });
}

const testmethod =async()=>{
    const itemRef  = collection(db , 'items');
    console.log(itemRef);
}

export {
    addItem , 
    testmethod , 
    deleteItemByName
}