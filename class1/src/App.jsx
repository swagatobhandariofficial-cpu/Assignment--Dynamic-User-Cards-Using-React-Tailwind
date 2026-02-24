import React from 'react'
import Card from './assets/components/card';

const App = () => {

  const influencers = [
  {
    id: 1,
    name: "Sophia Carter",
    username: "@sophiac",
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
    coverPic: "https://images.unsplash.com/photo-1500336624523-d727130c3328",
    posts: 245,
    followers: "18.2K",
    following: 530,
    bio: "Fashion & lifestyle creator ✨ Sharing everyday elegance, outfit inspirations, and moments that make life beautiful. Collaborations & creative storytelling."
  },
  {
    id: 2,
    name: "Emma Wilson",
    username: "@emmaw",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
    coverPic: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    posts: 310,
    followers: "24.7K",
    following: 610,
    bio: "Traveler with a camera 🌍 Coffee lover and sunset chaser. Capturing cultures, people, and stories from around the world through my lens."
  },
  {
    id: 3,
    name: "Olivia Brown",
    username: "@oliviab",
    profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
    coverPic: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    posts: 198,
    followers: "15.9K",
    following: 420,
    bio: "Minimal aesthetics enthusiast 🤍 Creating calm, cozy, and inspiring spaces. Lover of neutral tones, soft textures, and intentional living."
  },
  {
    id: 4,
    name: "Ava Martinez",
    username: "@avam",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
    coverPic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    posts: 276,
    followers: "21.3K",
    following: 710,
    bio: "Beauty & skincare lover 💄 Helping you glow with confidence. Makeup tutorials, skincare routines, and honest product reviews."
  },
  {
    id: 5,
    name: "Isabella Moore",
    username: "@isabellam",
    profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
    coverPic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    posts: 340,
    followers: "30.1K",
    following: 890,
    bio: "Content creator 🎥 Sharing daily moments, lifestyle vlogs, and behind-the-scenes stories. Turning simple days into unforgettable memories."
  },
  {
    id: 6,
    name: "Mia Anderson",
    username: "@miaa",
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
    coverPic: "https://images.unsplash.com/photo-1518611012118-696072aa579a",
    posts: 189,
    followers: "12.4K",
    following: 300,
    bio: "Fitness | Wellness | Mindset 💪 Inspiring healthy habits, strength training, and mental balance. Your daily motivation for a stronger life."
  },
  {
    id: 7,
    name: "Charlotte Thomas",
    username: "@charlottet",
    profilePic: "https://randomuser.me/api/portraits/women/7.jpg",
    coverPic: "https://images.unsplash.com/photo-1487412912498-0447578fcca8",
    posts: 415,
    followers: "40.6K",
    following: 1020,
    bio: "Entrepreneur & creator 🚀 Building brands, sharing growth strategies, and documenting the journey of turning ideas into reality."
  },
  {
    id: 8,
    name: "Amelia Jackson",
    username: "@ameliaj",
    profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
    coverPic: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
    posts: 260,
    followers: "19.8K",
    following: 540,
    bio: "Street fashion inspiration 👗 Exploring urban style, bold outfits, and confidence through fashion. Style is a way to speak without words."
  },
  {
    id: 9,
    name: "Harper White",
    username: "@harperw",
    profilePic: "https://randomuser.me/api/portraits/women/9.jpg",
    coverPic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    posts: 305,
    followers: "27.5K",
    following: 650,
    bio: "Creative photographer 🎨 Capturing emotions, colors, and stories through my lens. Art, light, and imagination combined."
  }
];


  return (
    <div className="flex flex-wrap gap-6 p-6">
      {influencers.map((elem) => (
        <Card elem={elem} />
      ))}
    </div>
  )
}

export default App