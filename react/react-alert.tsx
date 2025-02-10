"use client"

export default async function reactAlert(data: string) {
    if (data != "" && data != null) {
        return alert(`'You enter: '${data}'`);    
    } else {
        return alert("Please enter some data");
    }
}