<template>
  <!-- Main Content Container -->
  <!-- Normal mode-->
  <div class="section1" style="width: 70%">
    <div class="personal-details-container">
      <!-- Personal Details-->
      <div class="details-section" style="margin-top: 0px !important">
        <div style="display: flex; justify-content: space-between"></div>
        <!--Email preferences -->
        <div class="details-section">
          <h1>Email preferences</h1>
          <p>Decide what you want to be notified about, and unsubscribe from what you don't.</p>
        </div>

        <div class="detail-item">
          <label for="Email preferences" style="width: 30%">Email preferences</label>
          <div class="value">
            phuongtroc2004@gmail.com
            <br>
            This is the email address you use to sign in. It’s also where we send your booking
            confirmations.
          </div>
          <button class="edit-button">Manage</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.content h2 {
  font-size: 20px;
  margin-bottom: 10px;
}
.content p {
  color: #666;
  margin-bottom: 10px;
}
.manage-link {
  color: #4285f4;
  text-decoration: none;
  margin-bottom: 10px;
  padding-bottom: 10px;
}
.manage-link:hover {
  text-decoration: underline;
  margin-bottom: 10px;
}
.personal-details-container {
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  padding-left: 40px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}
.user-image-container img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.details-section {
  flex-grow: 1;
}
.details-section h1 {
  font-size: 30px;
  margin-bottom: 16px;
}
.details-section p {
  color: #666;
  margin-bottom: 24px;
}
.detail-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid #e6e6e6;
}
.detail-item label {
  font-weight: bold;
  margin-right: 16px;
}
.detail-item .value {
  flex-grow: 1;
  color: #666;
}
.detail-item .verified {
  background-color: #4caf50;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  margin-left: 8px;
}
.edit-button {
  background-color: #4285f4;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
