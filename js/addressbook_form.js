window.addEventListener('DOMContentLoaded', (event) => {

    const name=document.querySelector('#name');
    const nameError=document.querySelector('.name-error');
    name.addEventListener('input',function(){
        let names=document.querySelector('#name').value.split(" ");
        if(names[0].length==0){
            nameError.textContent="";
            return;
        }
        try{
            (new AddressBook()).fullName=name.value;
            nameError.textContent="";
        }catch(e){
           nameError.textContent=e;
        }
    })

     const addressElement=document.querySelector('#address');
     const addressError=document.querySelector('.address-error');
     addressElement.addEventListener('input',function(){
         try{
             (new AddressBook()).address=addressElement.value;
             addressError.textContent="";
         }catch(e){
             addressError.textContent=e;
         }
     })

    const phoneElement=document.querySelector('#mobile');
    const phoneError=document.querySelector('.mobile-error');
    phoneElement.addEventListener('input',function(){
        try{
            (new AddressBook()).mobileNumber=phoneElement.value;
            phoneError.textContent="";
        }catch(e){
            phoneError.textContent=e;
        }
    })

  });


  const saveForm=(event)=>{
      createAddressBookData();
  }

  const createAddressBookData=()=>{
      const addressBook={
          "fullName":document.querySelector('#name').value,
          "mobileNumber":document.querySelector('#mobile').value,
          "address":document.querySelector('#address').value,
          "city":document.querySelector('#city').value,
          "state":document.querySelector('#state').value,
          "zip":document.querySelector('#zip').value
      }
      alert(JSON.stringify(addressBook));
  }