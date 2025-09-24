// Cube movement (home page)
let angleY = 0;
let angleX = 0;

function rotateCube(direction) {
  if (direction === 'left') angleY -= 90;
  if (direction === 'right') angleY += 90;
  if (direction === 'top') angleX -= 90;
  if (direction === 'bottom') angleX += 90;

  document.getElementById('cube').style.transform =
    `rotateY(${angleY}deg) rotateX(${angleX}deg)`;
}



// Gallery data
const galleries = [
  {
    title: "My paintings",
    images: [
      { src: "painting1.jpg", desc: "This evocative painting captures the timeless spiritual love between Krishna and Radha. Against a vivid sunrise-orange sky, the two figures are silhouetted intricately, Krishna serenading on his flute while Radha dances gracefully. Flying birds add freedom and depth, infusing the scene with tranquility and devotion." },
      { src: "painting2.jpg", desc: "A joyful ballet dancer is frozen in a moment of exuberance, her colorful, spiraling dress reflecting the vitality of movement and celebration. The bright palette bursts with energy, while the poised posture conveys elegance and discipline, blending festivity with grace in perfect harmony." },
      { src: "painting3.jpg", desc: "This striking cubist portrait deconstructs the female form into geometric planes, creating a complex mosaic of emotions and colors. Bright blues, deep oranges, and muted browns interplay to challenge perception, inviting the viewer to explore multifaceted identities and introspection behind abstract faces." },
      { src: "painting4.jpg", desc: "This joyful representation of Lord Ganesh brings warmth and auspiciousness. The delicate black ink lines contrast with a subtle red and yellow wash background, highlighting Ganesh’s playful smile as he clutches a laddoo sweet. The intricate detailing celebrates culture and devotion, symbolizing wisdom, prosperity, and good fortune" },
      { src: "painting5.jpg", desc: "Radiating hope and positivity, this bright depiction of sunflowers captures sunlight and nature’s vitality. The blooming flowers, bathed in golden hues, sway gently against a calming pastel blue background. The cheerful scene evokes feelings of renewal, growth, and simple beauty in the natural world." },
      { src: "painting6.jpg", desc: "A mythical figure embodies the spirit of nature—a serene woman with emerald skin, adorned with a crown of vibrant blossoms and delicate vines. Her tranquil expression and flowing hair paint a fantastical tale of harmony between humanity and earth, blending fantasy elements with botanical beauty in vivid pinks and greens." },
      { src: "painting7.jpg", desc: "In haunting shades of black, white, and gray, a young girl reaches upward toward a bright red balloon drifting away. This poignant image explores themes of innocence, loss, and fleeting moments of joy. The stark contrast between the muted setting and the vibrant balloon intensifies the emotional pull, making it a powerful meditation on hope and melancholy." },
      { src: "painting8.jpg", desc: "A provocative portrayal of the Joker, this piece uses sharp lines and vivid colors, particularly reds and blues, to convey the complex persona behind the chaotic grin. The exaggerated makeup and intense eyes suggest a collision of madness and insight, making viewers ponder the fine line between humor and darkness" },
      { src: "painting9.jpg", desc: "apturing a tranquil urban moment, this painting shows a solitary lamppost glowing softly beneath a twilight sky flushed with pastel pinks and deep blues. A crescent moon hovers peacefully above silhouetted trees and power lines, inviting quiet reflection and the comforting solitude found in city nights." }
    ]
  },
  {
    title: "My Sketches",
    images: [
      { src: "sketch1.jpg", desc: "Golden Autumn in the forest." },
      { src: "sketch2.jpg", desc: "Golden Autumn in the forest." },
      { src: "sketch3.jpg", desc: "Golden Autumn in the forest." },
      { src: "sketch4.jpg", desc: "Golden Autumn in the forest." },
      { src: "sketch5.jpg", desc: "Golden Autumn in the forest." },
      { src: "sketch6.jpg", desc: "Golden Autumn in the forest." },
      { src: "sketch7.jpg", desc: "Golden Autumn in the forest." },
      { src: "sketch8.jpg", desc: "Golden Autumn in the forest." },
      { src: "sketch9.jpg", desc: "Golden Autumn in the forest." },
      { src: "sketch10.jpg", desc: "Golden Autumn in the forest." },
      { src: "sketch11.jpg", desc: "Golden Autumn in the forest." },
      { src: "sketch12.jpg", desc: "Golden Autumn in the forest." },
      { src: "sketch13.jpg", desc: "Golden Autumn in the forest." },
      { src: "sketch14.jpg", desc: "Golden Autumn in the forest." },
      { src: "sketch15.jpg", desc: "Golden Autumn in the forest." }
    ]
  },
  {
    title: "Portrait Gallery",
    images: [
      { src: "monument1.jpg", desc: "Golden Autumn in the forest." },
      { src: "monument2.jpg", desc: "Golden Autumn in the forest." },
      { src: "monument3.jpg", desc: "Golden Autumn in the forest." },
      { src: "monument4.jpg", desc: "Golden Autumn in the forest." }
    ]
  }
];

// Open selected gallery from button
function openGallery(index) {
  document.getElementById('home').style.display = 'none';
  document.getElementById('gallery').style.display = 'flex';
  document.getElementById('galleryTitle').textContent = galleries[index].title;
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = '';
  galleries[index].images.forEach(function (img, i) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    // Modal should only open on image click
    item.innerHTML = `
      <img src="${img.src}" class="gallery-img" alt="Gallery Image ${i + 1}" onclick="openModal('${img.src}','${img.desc.replace(/'/g, "\\'")}')">
    `;
  
    grid.appendChild(item);
  });
}


// Home button to return to cube

function showHome() {
  document.getElementById('gallery').style.display = 'none';
  document.getElementById('home').style.display = 'block';
  document.getElementById('navbar').style.display = 'flex';
}

function openModal(src, desc) {
  var modal = document.getElementById("imgModal");
  var modalImage = document.getElementById("modalImage");
  var modalDesc = document.getElementById("modalDesc");

  // Pehle modal hide rakhein, image try karein load hone ka
  modal.style.display = "none";
  modalImage.src = src;
  modalDesc.textContent = desc;
  
  // Agar image load ho jati hai
  modalImage.onload = function() {
    modal.style.display = "flex";
    document.getElementById("navbar").style.display = "none";
  }
  // Agar image nahi milti
  modalImage.onerror = function() {
    modal.style.display = "none"; // Modal show mat karo
    document.getElementById("navbar").style.display = "flex";
    // Optionally, ek alert ya toast bhi dikha sakte hain
    // alert("Image load nahi hui!");
  }
}



// function openModal(src, desc) {
//   const modal = document.getElementById('imgModal');
//   modal.style.display = 'flex';
//   document.getElementById('modalImage').src = src;
//   document.getElementById('modalDesc').textContent = desc;
//   document.getElementById('navbar').style.display = 'none';
// }
function closeModal() {
  document.getElementById('imgModal').style.display = 'none';
  document.getElementById('navbar').style.display = 'flex';
}



function showHome() {
  document.getElementById('home').style.display = 'block';
  document.getElementById('gallery').style.display = 'none';
  document.getElementById('ideas-page').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
}
function showIdeas() {
  document.getElementById('home').style.display = 'none';
  document.getElementById('gallery').style.display = 'none';
  document.getElementById('ideas-page').style.display = 'flex';
  document.getElementById('contact').style.display = 'none';
}
function showContact() {
  document.getElementById('home').style.display = 'none';
  document.getElementById('gallery').style.display = 'none';
  document.getElementById('ideas-page').style.display = 'none';
  document.getElementById('contact').style.display = 'block';
}

// For the ideas form
document.addEventListener("DOMContentLoaded", function(){
  var ideaForm = document.getElementById("ideaForm");
  if (ideaForm) {
    ideaForm.addEventListener("submit", function(e){
      e.preventDefault();
      alert("Thank you for your suggestions!");
      showHome();
      ideaForm.reset();
    });
  }
});
// document.addEventListener('DOMContentLoaded', function () {
//   const form = document.getElementById('ideaForm');
//   form.addEventListener('submit', function (event) {
//     event.preventDefault(); // prevent default form submit

//     alert('Thank you for your suggestions!');

//     // Hide ideas page and show home page
//     document.getElementById('ideas-page').style.display = 'none';
//     document.getElementById('home').style.display = 'block';

//     // Optionally clear textarea
//     form.reset();
//   });
// });
// function showHome() {
//   document.getElementById('home').style.display = 'block';
//   document.getElementById('gallery').style.display = 'none';
//   document.getElementById('ideas-page').style.display = 'none';
// }

// function showIdeas() {
//   document.getElementById('home').style.display = 'none';
//   document.getElementById('gallery').style.display = 'none';
//   document.getElementById('ideas-page').style.display = 'flex'; // or 'block'
// }
