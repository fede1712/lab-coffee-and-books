document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("lab-coffee-and-books JS imported successfully!");
  },
  false
);


function initMap() {

  const myMap = new google.maps.Map(
    document.querySelector('#myMap'),
    {
      center: { lat: 36.52572907036814, lng: - 6.288198075962892 },
      zoom: 12,
    }
  )
}
