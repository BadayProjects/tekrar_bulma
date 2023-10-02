console.log("Verilen metinde en çok tekrar eden harfi bulma");
function tekrarBul()
{
    const metin = document.getElementById("input").value
    if(metin === "")
    {
        document.getElementById("result").innerHTML= "Metin Girin!"
        return
    }
 
    const map = new Map();
    let karakter = "";
    let enbuyuksayi = 0;
    let enbuyukKarakter = "";
    let result = "";
    
        for(const char in metin)
        {
            karakter = metin[char].toLowerCase()
            console.log(karakter)
            if(!map.has(karakter))
            map.set(karakter,1)
            else
            map.set(karakter,(map.get(karakter)+1))
        }
    
        map.forEach((value, key) => {
            
            console.log(`(${key} = ${value})`);
            result += ("("+`${key} = ${value}`+"), ") 
            if(value>enbuyuksayi)
            {
                enbuyuksayi = value
                enbuyukKarakter = key
            }
        });
        result = result.slice(0, -2);
        document.getElementById("result2").innerHTML = result
        result = "";
        console.log("\nEn çok tekrar eden:")
        console.log(enbuyukKarakter + " = " + enbuyuksayi) 
        document.getElementById("result").innerHTML= ("En çok tekrar eden: " + enbuyukKarakter + " = " + enbuyuksayi) 
       
}
input.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("btn").click();
    }
  });
  input.addEventListener("keyup", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Backspace") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("result").innerHTML = "&nbsp;";
      document.getElementById("result2").innerHTML = "&nbsp;";
    }
  });

//Şükürrr
  function outputsize() {
    const textarea = document.getElementById('input');
    const wrappedText = document.querySelector("p");
    wrappedText.style.maxWidth = `${textarea.scrollWidth}px`;  
   }

   outputsize()
   
   new ResizeObserver(outputsize).observe(input)