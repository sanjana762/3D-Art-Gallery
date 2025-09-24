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
      { src: "painting9.jpg", desc: "capturing a tranquil urban moment, this painting shows a solitary lamppost glowing softly beneath a twilight sky flushed with pastel pinks and deep blues. A crescent moon hovers peacefully above silhouetted trees and power lines, inviting quiet reflection and the comforting solitude found in city nights." }
    ]
  },
  {
   title: "My Sketches",
    images: [
      { src: "sketch1.jpg", desc: "Eye Reflection  This sketch shows a realistic human eye with detailed eyelashes and shading. Inside the iris, two silhouetted figures stand side by side, as if captured in memory or reflection. The concept symbolizes how the eye holds stories, emotions, and people we can’t forget. It beautifully portrays vision as more than sight—its a window to feelings.The mood suggests nostalgia and emotional attachment" },
      { src: "sketch2.jpg", desc: "GWoman with Cigarette  This portrait depicts a woman with messy hair falling across her face, holding a cigarette between her lips. Her expression looks tired and rebellious, with strong shading around the eyes to show intensity. The cigarette and posture suggest carelessness, defiance, or a broken yet bold personality. It reflects themes of exhaustion and inner struggle. The sketch captures raw emotions with simplicity." },
      { src: "sketch3.jpg", desc: "GIn this artwork, a woman hides her face with her hand, but instead of skin, the hand carries words like “Fine,” “Broken,” “Stronger,” “Mistake.” These words show how people mask their real pain behind forced expressions. The tilted head and shading add drama to the sketch. It symbolizes hidden struggles, unspoken truths, and the pressure to appear “okay.” The drawing speaks strongly about mental health and emotional facades." },
      { src: "sketch4.jpg", desc: "This sketch shows a face in side profile, tilted upward with hair flowing backward. A visible crack runs down the face, symbolizing fragility and broken identity. The parted lips and dramatic shading add a sense of sorrow and release. It represents how people wear masks but eventually break under pressure. The artwork combines elegance with deep symbolism about human vulnerability." },
      { src: "sketch5.jpg", desc: "A human bust is drawn with the head replaced by a melting candle. Wax drips down over the face, while a small flame burns at the top. The imagery strongly symbolizes burnout, time running out, or a person who gives light to others while melting away themselves. The smooth shading highlights the surreal concept beautifully. It’s a powerful metaphor for sacrifice and emotional exhaustion." },
      { src: "sketch6.jpg", desc: "This drawing merges a woman’s calm face with skyscrapers growing out of her head. The closed eyes suggest she is lost in thought, carrying the weight of the city within her mind. The concept represents ambition, dreams, or the chaos of modern urban life. It shows how environments shape identities and thoughts. The blending of portrait and architecture gives the sketch a surreal, thought-provoking style." },
      { src: "sketch7.jpg", desc: "This sketch shows multiple overlapping faces of a woman expressing different emotions. One face screams upward, another looks sideways, and an eye emerges in between. The chaotic arrangement symbolizes inner conflict, fragmented identity, and the struggle of dealing with multiple emotions. The dramatic shading enhances the intensity. It portrays the turbulence of a restless mind." },
      { src: "sketch8.jpg", desc: "A divine sketch of Lord Ganesha sitting gracefully, holding objects in his hands. The detailing on his posture, trunk, and ornaments reflects devotion and serenity. His expression is calm, radiating positivity and wisdom. The seated pose adds to the peaceful composition. It represents blessings, purity, and spiritual inspiration." },
      { src: "sketch9.jpg", desc: "This artwork portrays a girl holding a smiling mask in front of her face. Behind the mask, her true face looks sad and teary, revealing hidden pain. The contrast between the mask and her expression symbolizes how people often hide suffering behind false smiles. The sketch captures the silent struggles of pretending to be fine. It conveys strong emotions about mental health and inner battles." },
      { src: "sketch10.jpg", desc: "A graceful sketch of a woman drawn from the back, draped in a saree. The detailing of the saree pleats and her bun hairstyle emphasizes elegance. Her posture, with one hand resting near her waist, suggests poise and confidence. The minimalistic background highlights her presence. It represents traditional beauty and feminine grace." },
      { src: "sketch11.jpg", desc: "This drawing shows a girl looking into a mirror where she sees not her reflection, but a skeleton holding a rose. A caption beneath reads: “She lost something she could never have.” The concept conveys grief, loss, and unfulfilled desires. The rose adds contrast, symbolizing love and longing. It is a powerful piece about the inevitability of death and the sorrow of unattainable dreams." },
      { src: "sketch12.jpg", desc: "This simple yet deep sketch depicts a human figure with the head replaced by a large, dark cloud. The faceless body suggests identity loss, while the cloud represents confusion, overthinking, or depression. The minimal detail adds strength to the metaphor. It portrays how a storm of thoughts can overshadow one’s clarity. The artwork’s simplicity makes its message striking." },
      { src: "sketch13.jpg", desc: "This sketch shows a human figure holding their head, which is replaced with a scribbled mess of lines. The rough strokes symbolize mental chaos, stress, or overwhelming thoughts. The posture of clutching the head emphasizes frustration and inner struggle. It represents how confusion or anxiety can distort clarity. The minimal detailing highlights the raw emotional expression." },
      { src: "sketch14.jpg", desc: "This artwork portrays a man in profile with a smile, but inside his head, a small child is sketched sitting in a curled position. The contrast between the outer happy face and the inner lonely child symbolizes hidden pain, nostalgia, or unresolved emotions. It reflects how people often carry their past within them. The sketch powerfully captures the conflict between appearance and reality." },
      { src: "sketch15.jpg", desc: "A finely detailed sketch of a squirrel sitting upright, holding food in its tiny paws. The fur texture, fluffy tail, and sharp eyes are carefully shaded for realism. The natural pose shows attentiveness, as if the squirrel is captured mid-meal. Unlike the other surreal artworks, this one focuses on lifelike observation. It demonstrates skill in animal sketching and attention to small details." }
    ]
  },
  {
  title: "Portrait Gallery",
    images: [
      { src: "monument1.jpg", desc: "This detailed pencil sketch illustrates a historic stepwell showcasing intricate architectural elements. The receding arches and carefully shaded depth capture the grandeur and complexity of this ancient water structure, highlighting the symmetry and precise craftsmanship typical of such monuments." },
      { src: "monument2.jpg", desc: "A finely rendered depiction of the Roman Colosseum, this sketch uses delicate line work and shading to bring out the layered arches and structural magnificence of the iconic amphitheater. The artist captures the monumental scale and historic richness with careful perspective and detail." },
      { src: "monument3.jpg", desc: "This artwork portrays a famous historic fort or palace facade with domes and minarets, accentuated by the national flag. The pencil shading emphasizes the architectural finesse and cultural significance of the monument, evoking a sense of pride and heritage through artistry." },
      { src: "monument4.jpg", desc: "A majestic gateway structure is presented here with intricate brick and stone detailing. The artist’s use of perspective and shading highlights the imposing arches and towers, reflecting both the strength and beauty of traditional fortress architecture." }
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

  modal.style.display = "none";
  modalImage.src = src;
  modalDesc.textContent = desc;

  modalImage.onload = function() {
    modal.style.display = "flex";
    document.getElementById("navbar").style.display = "none";
  }

  modalImage.onerror = function() {
    modal.style.display = "none"; 
    document.getElementById("navbar").style.display = "flex";
   
  }
}


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




