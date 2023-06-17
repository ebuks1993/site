
const mykeyvalues = window.location.search
console.log(mykeyvalues)

const urlparams= new URLSearchParams(mykeyvalues);
const param1=urlparams.get('email')
const param2=urlparams.get('amount')
const param3=urlparams.get('gameid')
const param4=urlparams.get('name')

console.log(param2,param3,param4)

document.querySelector('#email-address').value=param1;
document.querySelector('#amount').value=param2;


let dab={"gameid":param3,"name":param4}


function SquadPay() {

 
  const squadInstance = new squad({
    onClose: () => console.log("Widget closed"),
    onLoad: () => console.log("Widget loaded successfully"),
    onSuccess: () => console.log(`Linked successfully`),
    key: "sandbox_pk_8f6b99e03d5e36e735d05fc9c2cf483ad134b0c1cc71",
    //Change key (test_pk_sample-public-key-1) to the key on your Squad Dashboard
    email:param1,
    amount:param2*100,
    //Enter amount in Naira or Dollar (Base value Kobo/cent already multiplied by 100)
    currency_code: "NGN",
    metadata:dab
  });
  squadInstance.setup();
  squadInstance.open();

}
