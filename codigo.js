
            let elements = document.querySelectorAll('a.clicar');
            console.log(elements

            );
        
            elements.forEach((item) => 
            {
                item.addEventListener('click', function(e)
                {
                    e.preventDefault();
                    console.log("entrou")
                    let estado = document.querySelector(`.gaveta`).style.display;
        
                    if (estado == "block") 
                    {
                        this.parentNode.querySelector('.gaveta').style.display="none";
                    }
                    else
                    {
                        this.parentNode.querySelector('.gaveta').style.display="block";
                        console.log("Foi");
                    }
                })
            });