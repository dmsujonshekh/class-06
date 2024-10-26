<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Us</title>
  <link rel="stylesheet" href="contact.css">
</head>
<body>
  <div class="contact-info-section">
    <div class="contact-card">
      <div class="icon"><img src="phone-icon.png" alt="Phone Icon"></div>
      <h3>Phone</h3>
      <p>+8801648177071</p>
    </div>
    <div class="contact-card">
      <div class="icon"><img src="email-icon.png" alt="Email Icon"></div>
      <h3>Email</h3>
      <p>banggomartbd@gmail.com</p>
    </div>
    <div class="contact-card">
      <div class="icon"><img src="location-icon.png" alt="Location Icon"></div>
      <h3>Address</h3>
      <p>House#06, Level#03 Road-1/A, Sector#09<br>Housebuilding, Uttara Dhaka-1230</p>
    </div>
  </div>

  <div class="contact-form-container">
    <h2>Contact Us</h2>
    <form action="#" method="post">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required>

      <label for="phone">Phone</label>
      <input type="tel" id="phone" name="phone" required>

      <label for="email">Email</label>
      <input type="email" id="email" name="email" required>

      <label for="message">Message</label>
      <textarea id="message" name="message" rows="4" required></textarea>

      <button type="submit">Send Message</button>
    </form>
  </div>
</body>
</html>
