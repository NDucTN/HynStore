<script>
  function submitForm() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var shoeSize = document.getElementById("shoeSize").value;
    var shoeColor = document.getElementById("shoeColor").value;
    var domain = window.location.hostname;

    var data = {
      name: name,
      phone: phone,
      address: address,
      shoeSize: shoeSize,
      shoeColor: shoeColor,
      domain: domain
    };

    fetch('YOUR_SCRIPT_URL', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(function(response) {
      // Xử lý phản hồi từ Google Apps Script (nếu cần)
    })
    .catch(function(error) {
      // Xử lý lỗi (nếu có)
    });
  }
</script>
