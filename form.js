document
  .getElementById("consultation-form")
  .addEventListener("submit", function(event){
    event.preventDefault();
    
    const formData = {
        nome: document.getElementById("name").value,
        telefone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        descricao: document.getElementById("text").value,
    };

    console.log("Dados: ", formData);

        fetch("http://127.0.0.1",{  //loopback de cria
            method: "POST",

            
        headers: {
            "Content-Type": "application/json",
        },
        
        body: JSON.stringify(formData),
        })

        .then((response) => response.json())
        .then((data) => {
            console.log("Sucesso: ", data);
            alert("Pedido cadastrado com sucesso! obrigado e volte sempre");
        })
        
        .catch((error) => {
            console.error("Erro", error);
            alert("Erro ao realizar o pedido, tente novamente  :(");
        })

        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("email").value = "";
        document.getElementById("text").value = "";
  });