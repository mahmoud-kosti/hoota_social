import { supabase } from "./supabase.js";

async function registerStudent(name, course) {

  if(!name){
    alert("اكتب اسمك");
    return;
  }

  const { error } = await supabase
    .from("students")
    .insert([{ name, course }]);

  if(error){
    alert("في مشكلة ❌");
    console.log(error);
  } else {
    alert("تم التسجيل ✅");
  }
}

window.registerStudent = registerStudent;
