function validateform(){  
    var name=document.form.aname.value;   
    var anum = /^[A-Za-z0-9]+$/;
    var isnum = /^\d+$/;
    var episodes=document.form.ep.value;
    if (name==null || name==""){  
      alert("Animi name should not be empty");  
      return false;  
    }
    else if(name.length<6){  
      alert("The animi name should be a minimum of 8 characters and above");  
      return false;  
    }  
    else if(name.length>15){
      alert("The animi name should be less than 15 characters");  
      return false;
    }
    else if(name.indexOf(' ') >= 0){
        alert("No space is allowed in Animi-name ");
        return false;
    }
    else if(anum.test(name)==false){
        alert("Animi-name should not contain special characters");
        return false;
    }
    else if(isnum.test(episodes)==false){
        alert("Number of episodes should be in numeric format");
        return false;
    }
    else{
        alert("Form submitted successfully");
        return false;
    }
} 