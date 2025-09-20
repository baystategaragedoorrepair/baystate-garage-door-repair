function initMap() {
  const location = { lat: 42.253256, lng: -71.066148 }; // 342 Blue Hill Ave Milton MA

  // Create Map
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: location,
  });

  // Create Marker
  const marker = new google.maps.Marker({
    position: location,
    map: map,
    title: "Baystate Garage Door Repair",
  });

  // Info Window (shows details about your business)
  const infoContent = `
    <div style="font-size:14px; line-height:1.5;">
      <h3>Baystate Garage Door Repair</h3>
      <p><b>Address:</b> 342 Blue Hill Ave, Milton, MA 02186</p>
      <p><b>Business Hours:</b><br>
      Monday - Sunday: 07:00 - 19:00</p>
      <p><b>Service Areas:</b><br>
      Milton, Quincy, Dorchester, and nearby areas in Massachusetts</p>
      <p><b>Phone:</b> (216) 407-9325</p>
    </div>
  `;

  const infoWindow = new google.maps.InfoWindow({
    content: infoContent,
  });

  // Show InfoWindow when marker is clicked
  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });
}
