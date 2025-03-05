"use client"

export default async function search(formData: FormData) {
    const query = formData.get("query");
    alert(`'You search for '${query}'`);    
}