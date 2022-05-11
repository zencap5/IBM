var url = "https://video.ibm.com/oauth2/token";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Access-Control-Allow-Origin", "https://*");
xhr.setRequestHeader("Access-Control-Allow-Headers", "X-Token");
xhr.setRequestHeader("Access-Control-Allow-Methods", "GET, OPTIONS, POST, PUT");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", "Bearer {token}");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

var data = "client_id=af0b2fe38d9d90fe5736aca83590d24a9982b743&client_secret=b0f8c878a25c9edd195ed6c977886208baa8f032&grant_type=client_credentials";

xhr.send(data);
