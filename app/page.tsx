'use client';

import { useState, useEffect } from 'react';

const MELON_TOP_100 = [
  { id: 1, title: "Magnetic", artist: "아일릿 (ILLIT)", album: "SUPER REAL ME", cover: "https://picsum.photos/seed/1/300/300", rank: 1 },
  { id: 2, title: "Fate (운명)", artist: "(여자)아이들", album: "2", cover: "https://picsum.photos/seed/2/300/300", rank: 2 },
  { id: 3, title: "고민중독", artist: "QWER", album: "MANITO", cover: "https://picsum.photos/seed/3/300/300", rank: 3 },
  { id: 4, title: "밤양갱", artist: "비비 (BIBI)", album: "밤양갱", cover: "https://picsum.photos/seed/4/300/300", rank: 4 },
  { id: 5, title: "첫 만남은 계획대로 되지 않아", artist: "TWS (투어스)", album: "Sparkling Blue", cover: "https://picsum.photos/seed/5/300/300", rank: 5 },
  { id: 6, title: "Welcome to the Show", artist: "DAY6 (데이식스)", album: "Fourever", cover: "https://picsum.photos/seed/6/300/300", rank: 6 },
  { id: 7, title: "나는 아픈 건 딱 질색이니까", artist: "(여자)아이들", album: "2", cover: "https://picsum.photos/seed/7/300/300", rank: 7 },
  { id: 8, title: "EASY", artist: "LE SSERAFIM (르세라핌)", album: "EASY", cover: "https://picsum.photos/seed/8/300/300", rank: 8 },
  { id: 9, title: "Love wins all", artist: "아이유 (IU)", album: "The Winning", cover: "https://picsum.photos/seed/9/300/300", rank: 9 },
  { id: 10, title: "To. X", artist: "태연 (TAEYEON)", album: "To. X", cover: "https://picsum.photos/seed/10/300/300", rank: 10 },
  { id: 11, title: "Smart", artist: "LE SSERAFIM (르세라핌)", album: "EASY", cover: "https://picsum.photos/seed/11/300/300", rank: 11 },
  { id: 12, title: "비의 랩소디", artist: "임재현", album: "비의 랩소디", cover: "https://picsum.photos/seed/12/300/300", rank: 12 },
  { id: 13, title: "Perfect Night", artist: "LE SSERAFIM (르세라핌)", album: "Perfect Night", cover: "https://picsum.photos/seed/13/300/300", rank: 13 },
  { id: 14, title: "에피소드", artist: "이무진", album: "에피소드", cover: "https://picsum.photos/seed/14/300/300", rank: 14 },
  { id: 15, title: "Love 119", artist: "RIIZE", album: "Love 119", cover: "https://picsum.photos/seed/15/300/300", rank: 15 },
  { id: 16, title: "그대만 있다면", artist: "너드커넥션", album: "그대만 있다면", cover: "https://picsum.photos/seed/16/300/300", rank: 16 },
  { id: 17, title: "Hype Boy", artist: "NewJeans", album: "New Jeans", cover: "https://picsum.photos/seed/17/300/300", rank: 17 },
  { id: 18, title: "Seven (feat. Latto)", artist: "정국", album: "Seven", cover: "https://picsum.photos/seed/18/300/300", rank: 18 },
  { id: 19, title: "예뻤어", artist: "DAY6 (데이식스)", album: "Sunrise", cover: "https://picsum.photos/seed/19/300/300", rank: 19 },
  { id: 20, title: "한 페이지가 될 수 있게", artist: "DAY6 (데이식스)", album: "The Book of Us : Gravity", cover: "https://picsum.photos/seed/20/300/300", rank: 20 },
  { id: 21, title: "Ditto", artist: "NewJeans", album: "OMG", cover: "https://picsum.photos/seed/21/300/300", rank: 21 },
  { id: 22, title: "Drama", artist: "aespa", album: "Drama", cover: "https://picsum.photos/seed/22/300/300", rank: 22 },
  { id: 23, title: "ETA", artist: "NewJeans", album: "Get Up", cover: "https://picsum.photos/seed/23/300/300", rank: 23 },
  { id: 24, title: "Super Shy", artist: "NewJeans", album: "Get Up", cover: "https://picsum.photos/seed/24/300/300", rank: 24 },
  { id: 25, title: "인사", artist: "범진", album: "인사", cover: "https://picsum.photos/seed/25/300/300", rank: 25 },
  { id: 26, title: "어떻게 이별까지 사랑하겠어", artist: "AKMU (악동뮤지션)", album: "NEXT EPISODE", cover: "https://picsum.photos/seed/26/300/300", rank: 26 },
  { id: 27, title: "손오공", artist: "지코 (ZICO)", album: "GOLDEN TORCH", cover: "https://picsum.photos/seed/27/300/300", rank: 27 },
  { id: 28, title: "Spicy", artist: "aespa", album: "MY WORLD", cover: "https://picsum.photos/seed/28/300/300", rank: 28 },
  { id: 29, title: "After LIKE", artist: "아이브 (IVE)", album: "After Like", cover: "https://picsum.photos/seed/29/300/300", rank: 29 },
  { id: 30, title: "LOVE DIVE", artist: "아이브 (IVE)", album: "LOVE DIVE", cover: "https://picsum.photos/seed/30/300/300", rank: 30 },
  { id: 31, title: "Kitsch", artist: "아이브 (IVE)", album: "I've IVE", cover: "https://picsum.photos/seed/31/300/300", rank: 31 },
  { id: 32, title: "I AM", artist: "아이브 (IVE)", album: "I've IVE", cover: "https://picsum.photos/seed/32/300/300", rank: 32 },
  { id: 33, title: "별빛 같은 나의 사랑아", artist: "임영웅", album: "IM HERO", cover: "https://picsum.photos/seed/33/300/300", rank: 33 },
  { id: 34, title: "이제 나만 믿어요", artist: "임영웅", album: "IM HERO", cover: "https://picsum.photos/seed/34/300/300", rank: 34 },
  { id: 35, title: "미래소년", artist: "임영웅", album: "IM HERO", cover: "https://picsum.photos/seed/35/300/300", rank: 35 },
  { id: 36, title: "Candy", artist: "NCT DREAM", album: "Candy", cover: "https://picsum.photos/seed/36/300/300", rank: 36 },
  { id: 37, title: "Antifragile", artist: "LE SSERAFIM (르세라핌)", album: "ANTIFRAGILE", cover: "https://picsum.photos/seed/37/300/300", rank: 37 },
  { id: 38, title: "UNFORGIVEN", artist: "LE SSERAFIM (르세라핌)", album: "UNFORGIVEN", cover: "https://picsum.photos/seed/38/300/300", rank: 38 },
  { id: 39, title: "Queencard", artist: "(여자)아이들", album: "I feel", cover: "https://picsum.photos/seed/39/300/300", rank: 39 },
  { id: 40, title: "Nxde", artist: "(여자)아이들", album: "I love", cover: "https://picsum.photos/seed/40/300/300", rank: 40 },
  { id: 41, title: "tomboy", artist: "(여자)아이들", album: "I NEVER DIE", cover: "https://picsum.photos/seed/41/300/300", rank: 41 },
  { id: 42, title: "Attention", artist: "NewJeans", album: "New Jeans", cover: "https://picsum.photos/seed/42/300/300", rank: 42 },
  { id: 43, title: "OMG", artist: "NewJeans", album: "OMG", cover: "https://picsum.photos/seed/43/300/300", rank: 43 },
  { id: 44, title: "Cool with you", artist: "NewJeans", album: "Get Up", cover: "https://picsum.photos/seed/44/300/300", rank: 44 },
  { id: 45, title: "New Jeans", artist: "NewJeans", album: "Get Up", cover: "https://picsum.photos/seed/45/300/300", rank: 45 },
  { id: 46, title: "Dynamite", artist: "방탄소년단 (BTS)", album: "Dynamite", cover: "https://picsum.photos/seed/46/300/300", rank: 46 },
  { id: 47, title: "Butter", artist: "방탄소년단 (BTS)", album: "Butter", cover: "https://picsum.photos/seed/47/300/300", rank: 47 },
  { id: 48, title: "봄여름가을겨울 (Still Life)", artist: "BIGBANG (빅뱅)", album: "Still Life", cover: "https://picsum.photos/seed/48/300/300", rank: 48 },
  { id: 49, title: "Cupid (Twin Ver.)", artist: "FIFTY FIFTY", album: "The Beginning: Cupid", cover: "https://picsum.photos/seed/49/300/300", rank: 49 },
  { id: 50, title: "Flower", artist: "지수 (JISOO)", album: "ME", cover: "https://picsum.photos/seed/50/300/300", rank: 50 },
  { id: 51, title: "Shut Down", artist: "BLACKPINK", album: "BORN PINK", cover: "https://picsum.photos/seed/51/300/300", rank: 51 },
  { id: 52, title: "Pink Venom", artist: "BLACKPINK", album: "BORN PINK", cover: "https://picsum.photos/seed/52/300/300", rank: 52 },
  { id: 53, title: "영웅 (英雄)", artist: "엑소 (EXO)", album: "EXIST", cover: "https://picsum.photos/seed/53/300/300", rank: 53 },
  { id: 54, title: "Sneakers", artist: "ITZY (있지)", album: "CHECKMATE", cover: "https://picsum.photos/seed/54/300/300", rank: 54 },
  { id: 55, title: "DALLA DALLA", artist: "ITZY (있지)", album: "IT'z ITZY", cover: "https://picsum.photos/seed/55/300/300", rank: 55 },
  { id: 56, title: "Celebrity", artist: "아이유 (IU)", album: "LILAC", cover: "https://picsum.photos/seed/56/300/300", rank: 56 },
  { id: 57, title: "eight", artist: "아이유 (IU)", album: "eight", cover: "https://picsum.photos/seed/57/300/300", rank: 57 },
  { id: 58, title: "LILAC", artist: "아이유 (IU)", album: "LILAC", cover: "https://picsum.photos/seed/58/300/300", rank: 58 },
  { id: 59, title: "사건의 지평선", artist: "윤하 (YOUNHA)", album: "EPISODE", cover: "https://picsum.photos/seed/59/300/300", rank: 59 },
  { id: 60, title: "신호등", artist: "이무진", album: "신호등", cover: "https://picsum.photos/seed/60/300/300", rank: 60 },
  { id: 61, title: "MIROH", artist: "Stray Kids", album: "Clé 1 : MIROH", cover: "https://picsum.photos/seed/61/300/300", rank: 61 },
  { id: 62, title: "MANIAC", artist: "Stray Kids", album: "ODDINARY", cover: "https://picsum.photos/seed/62/300/300", rank: 62 },
  { id: 63, title: "CASE 143", artist: "Stray Kids", album: "MAXIDENT", cover: "https://picsum.photos/seed/63/300/300", rank: 63 },
  { id: 64, title: "IDOL", artist: "방탄소년단 (BTS)", album: "LOVE YOURSELF 結 Answer", cover: "https://picsum.photos/seed/64/300/300", rank: 64 },
  { id: 65, title: "Boy With Luv", artist: "방탄소년단 (BTS)", album: "MAP OF THE SOUL : PERSONA", cover: "https://picsum.photos/seed/65/300/300", rank: 65 },
  { id: 66, title: "Next Level", artist: "aespa", album: "Savage", cover: "https://picsum.photos/seed/66/300/300", rank: 66 },
  { id: 67, title: "Savage", artist: "aespa", album: "Savage", cover: "https://picsum.photos/seed/67/300/300", rank: 67 },
  { id: 68, title: "Girls", artist: "aespa", album: "Girls", cover: "https://picsum.photos/seed/68/300/300", rank: 68 },
  { id: 69, title: "Teddy Bear", artist: "STAYC (스테이씨)", album: "Teddy Bear", cover: "https://picsum.photos/seed/69/300/300", rank: 69 },
  { id: 70, title: "ASAP", artist: "STAYC (스테이씨)", album: "YOUNG-LUV.COM", cover: "https://picsum.photos/seed/70/300/300", rank: 70 },
  { id: 71, title: "birthday", artist: "정국", album: "GOLDEN", cover: "https://picsum.photos/seed/71/300/300", rank: 71 },
  { id: 72, title: "3D", artist: "정국", album: "GOLDEN", cover: "https://picsum.photos/seed/72/300/300", rank: 72 },
  { id: 73, title: "새삥", artist: "지코 (ZICO)", album: "GALLERY", cover: "https://picsum.photos/seed/73/300/300", rank: 73 },
  { id: 74, title: "눈의 꽃", artist: "박효신", album: "눈의 꽃", cover: "https://picsum.photos/seed/74/300/300", rank: 74 },
  { id: 75, title: "야생화", artist: "박효신", album: "LOVER", cover: "https://picsum.photos/seed/75/300/300", rank: 75 },
  { id: 76, title: "사랑을 했다", artist: "iKON", album: "NEW KIDS : BEGIN", cover: "https://picsum.photos/seed/76/300/300", rank: 76 },
  { id: 77, title: "Palette", artist: "아이유 (IU)", album: "Palette", cover: "https://picsum.photos/seed/77/300/300", rank: 77 },
  { id: 78, title: "헤어지자 말해요", artist: "박재정", album: "헤어지자 말해요", cover: "https://picsum.photos/seed/78/300/300", rank: 78 },
  { id: 79, title: "ISTJ", artist: "NCT DREAM", album: "ISTJ", cover: "https://picsum.photos/seed/79/300/300", rank: 79 },
  { id: 80, title: "Sticker", artist: "NCT 127", album: "Sticker", cover: "https://picsum.photos/seed/80/300/300", rank: 80 },
  { id: 81, title: "0X1=LOVESONG", artist: "투모로우바이투게더 (TXT)", album: "The Chaos Chapter: FREEZE", cover: "https://picsum.photos/seed/81/300/300", rank: 81 },
  { id: 82, title: "INVU", artist: "태연 (TAEYEON)", album: "INVU", cover: "https://picsum.photos/seed/82/300/300", rank: 82 },
  { id: 83, title: "들을게", artist: "폴킴", album: "들을게", cover: "https://picsum.photos/seed/83/300/300", rank: 83 },
  { id: 84, title: "모든 날, 모든 순간", artist: "폴킴", album: "모든 날, 모든 순간", cover: "https://picsum.photos/seed/84/300/300", rank: 84 },
  { id: 85, title: "Always", artist: "윤딴딴", album: "Always", cover: "https://picsum.photos/seed/85/300/300", rank: 85 },
  { id: 86, title: "그게 더 나았을 텐데", artist: "이무진", album: "그게 더 나았을 텐데", cover: "https://picsum.photos/seed/86/300/300", rank: 86 },
  { id: 87, title: "Password 486", artist: "윤하 (YOUNHA)", album: "EPISODE", cover: "https://picsum.photos/seed/87/300/300", rank: 87 },
  { id: 88, title: "Smoothie", artist: "NCT DREAM", album: "ISTJ", cover: "https://picsum.photos/seed/88/300/300", rank: 88 },
  { id: 89, title: "질주 (2 Baddies)", artist: "NCT 127", album: "2 Baddies", cover: "https://picsum.photos/seed/89/300/300", rank: 89 },
  { id: 90, title: "MIRRORBALL", artist: "투모로우바이투게더 (TXT)", album: "minisode 2", cover: "https://picsum.photos/seed/90/300/300", rank: 90 },
  { id: 91, title: "윈터 어웨이크", artist: "태연 (TAEYEON)", album: "INVU", cover: "https://picsum.photos/seed/91/300/300", rank: 91 },
  { id: 92, title: "Weekend", artist: "태연 (TAEYEON)", album: "INVU", cover: "https://picsum.photos/seed/92/300/300", rank: 92 },
  { id: 93, title: "Killing Me", artist: "iKON", album: "NEW KIDS : CONTINUE", cover: "https://picsum.photos/seed/93/300/300", rank: 93 },
  { id: 94, title: "Hype Boy", artist: "NewJeans", album: "New Jeans", cover: "https://picsum.photos/seed/94/300/300", rank: 94 },
  { id: 95, title: "Love wins all", artist: "아이유 (IU)", album: "The Winning", cover: "https://picsum.photos/seed/95/300/300", rank: 95 },
  { id: 96, title: "Drama", artist: "aespa", album: "Drama", cover: "https://picsum.photos/seed/96/300/300", rank: 96 },
  { id: 97, title: "Ditto", artist: "NewJeans", album: "OMG", cover: "https://picsum.photos/seed/97/300/300", rank: 97 },
  { id: 98, title: "Celebrity", artist: "아이유 (IU)", album: "LILAC", cover: "https://picsum.photos/seed/98/300/300", rank: 98 },
  { id: 99, title: "Super Shy", artist: "NewJeans", album: "Get Up", cover: "https://picsum.photos/seed/99/300/300", rank: 99 },
  { id: 100, title: "Magnetic", artist: "아일릿 (ILLIT)", album: "SUPER REAL ME", cover: "https://picsum.photos/seed/100/300/300", rank: 100 },
];

type Song = typeof MELON_TOP_100[0];
type CardType = 'player' | 'waveform' | 'minimal' | 'square';
const cardTypes: CardType[] = ['player', 'waveform', 'minimal', 'square'];

function WaveformBars() {
  const bars = Array.from({ length: 28 }, (_, i) => 10 + Math.abs(Math.sin(i * 0.7) * 24) + Math.abs(Math.cos(i * 0.4) * 16));
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '2px', height: '36px' }}>
      {bars.map((h, i) => (
        <div key={i} style={{ width: '3px', height: `${h}px`, borderRadius: '2px', background: '#111', opacity: 0.8 }} />
      ))}
    </div>
  );
}

function Controls() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontSize: '14px', cursor: 'pointer' }}>⇌</span>
      <span style={{ fontSize: '20px', cursor: 'pointer' }}>⏮</span>
      <div style={{ width: '44px', height: '44px', background: '#111', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
        <span style={{ color: 'white', fontSize: '16px', marginLeft: '3px' }}>▶</span>
      </div>
      <span style={{ fontSize: '20px', cursor: 'pointer' }}>⏭</span>
      <span style={{ fontSize: '14px', cursor: 'pointer' }}>↺</span>
    </div>
  );
}

function ProgressBar({ pct }: { pct: number }) {
  return (
    <div>
      <div style={{ position: 'relative', height: '3px', background: '#e0e0e0', borderRadius: '2px' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, width: `${pct}%`, height: '100%', background: '#111', borderRadius: '2px' }} />
        <div style={{ position: 'absolute', left: `${pct}%`, top: '-4px', width: '10px', height: '10px', background: '#111', borderRadius: '50%', transform: 'translateX(-50%)' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#999', marginTop: '6px' }}>
        <span>0:25</span><span>3:40</span>
      </div>
    </div>
  );
}

const cardStyle = {
  background: '#fff', border: '1.5px solid #111', borderRadius: '20px',
  padding: '20px', fontFamily: "'Georgia', serif", display: 'flex', flexDirection: 'column' as const, gap: '12px'
};

function PlayerCard({ song }: { song: Song }) {
  return (
    <div style={cardStyle}>
      <img src={song.cover} alt={song.title} style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', borderRadius: '12px', border: '1px solid #eee' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={{ fontWeight: '700', fontSize: '15px', lineHeight: 1.3 }}>{song.title}</div>
          <div style={{ fontSize: '12px', color: '#666', marginTop: '2px' }}>{song.artist}</div>
        </div>
        <span style={{ fontSize: '18px' }}>♥</span>
      </div>
      <ProgressBar pct={35} />
      <Controls />
    </div>
  );
}

function WaveformCard({ song }: { song: Song }) {
  return (
    <div style={cardStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={{ fontWeight: '700', fontSize: '15px', lineHeight: 1.3 }}>{song.title}</div>
          <div style={{ fontSize: '12px', color: '#666', marginTop: '2px' }}>{song.artist}</div>
        </div>
        <span style={{ fontSize: '18px' }}>♥</span>
      </div>
      <WaveformBars />
      <ProgressBar pct={40} />
      <Controls />
    </div>
  );
}

function MinimalCard({ song }: { song: Song }) {
  return (
    <div style={cardStyle}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontWeight: '700', fontSize: '16px' }}>{song.title}</div>
        <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>{song.artist}</div>
      </div>
      <div style={{ textAlign: 'center', fontSize: '22px' }}>♥</div>
      <ProgressBar pct={30} />
      <Controls />
    </div>
  );
}

function SquareCard({ song }: { song: Song }) {
  return (
    <div style={{ background: '#fff', border: '1.5px solid #111', borderRadius: '20px', overflow: 'hidden', fontFamily: "'Georgia', serif" }}>
      <div style={{ position: 'relative' }}>
        <img src={song.cover} alt={song.title} style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', display: 'block' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.75))', padding: '24px 16px 12px', color: 'white' }}>
          <div style={{ fontWeight: '700', fontSize: '14px' }}>{song.title}</div>
          <div style={{ fontSize: '11px', opacity: 0.8 }}>{song.artist}</div>
        </div>
      </div>
      <div style={{ padding: '14px 16px' }}>
        <Controls />
      </div>
    </div>
  );
}

function SongCard({ song, cardType }: { song: Song; cardType: CardType }) {
  if (cardType === 'player') return <PlayerCard song={song} />;
  if (cardType === 'waveform') return <WaveformCard song={song} />;
  if (cardType === 'minimal') return <MinimalCard song={song} />;
  return <SquareCard song={song} />;
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [isSaved, setIsSaved] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const filteredSongs = MELON_TOP_100.filter(song =>
    song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToPlaylist = (song: Song) => {
    if (!playlist.find(s => s.id === song.id)) {
      setPlaylist(prev => [...prev, song]);
    }
    setIsModalOpen(false);
  };

  const removeFromPlaylist = (id: number) => setPlaylist(prev => prev.filter(s => s.id !== id));

  const savePlaylist = () => {
    setIsSaved(true);
    setSaveMessage('플레이리스트가 저장되었습니다!');
    setTimeout(() => setSaveMessage(''), 3000);
  };

  if (!mounted) return null;

  return (
    <div style={{ minHeight: '100vh', background: '#f7f6f2', fontFamily: "'Georgia', serif" }}>

      {/* 헤더 */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 32px', borderBottom: '1px solid #ddd' }}>
        {isSaved
          ? <button onClick={() => setIsSaved(false)} style={{ padding: '8px 20px', border: '1.5px solid #111', borderRadius: '20px', background: 'transparent', cursor: 'pointer', fontSize: '13px', fontFamily: 'monospace' }}>미리보기</button>
          : <div />}
        <button onClick={() => setIsModalOpen(true)} style={{ padding: '8px 22px', border: '1.5px solid #111', borderRadius: '20px', background: 'transparent', cursor: 'pointer', fontSize: '13px', fontFamily: 'monospace', marginLeft: 'auto' }}>
          노래 추가하기
        </button>
      </div>

      {isSaved ? (
        /* ── 저장된 플레이리스트: 혼합 카드 그리드 ── */
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '48px 24px' }}>
          <div style={{ marginBottom: '40px', textAlign: 'center' }}>
            <div style={{ fontSize: '11px', letterSpacing: '3px', color: '#999', fontFamily: 'monospace', textTransform: 'uppercase', marginBottom: '8px' }}>my playlist</div>
            <h1 style={{ fontSize: '48px', fontWeight: '700', margin: 0, lineHeight: 1.1 }}>Playlist</h1>
            <div style={{ fontSize: '13px', color: '#888', marginTop: '8px', fontFamily: 'monospace' }}>{playlist.length}곡</div>
          </div>
          <div style={{ columns: 2, gap: '16px' }}>
            {playlist.map((song, i) => (
              <div key={song.id} style={{ breakInside: 'avoid', marginBottom: '16px' }}>
                <SongCard song={song} cardType={cardTypes[i % 4]} />
              </div>
            ))}
          </div>
        </div>

      ) : (
        /* ── 메인: 빈닐 히어로 + 편집 ── */
        <div style={{ maxWidth: '680px', margin: '0 auto', padding: '40px 24px' }}>

          {/* 빈닐 히어로 섹션 */}
          <div style={{ textAlign: 'center', marginBottom: '52px', position: 'relative', userSelect: 'none' }}>
            <div style={{ position: 'absolute', top: '8px', left: '48px', fontSize: '16px', color: '#bbb' }}>☆</div>
            <div style={{ position: 'absolute', top: '64px', right: '64px', fontSize: '12px', color: '#ccc' }}>☆</div>
            <div style={{ position: 'absolute', top: '18px', left: '130px', fontSize: '12px', color: '#ddd' }}>♥</div>
            <div style={{ position: 'absolute', top: '90px', left: '32px', fontSize: '10px', color: '#ddd' }}>♥</div>

            <div style={{ fontFamily: 'monospace', fontWeight: '900', fontSize: '26px', letterSpacing: '5px', lineHeight: 1.1, textTransform: 'uppercase' }}>MY MONTHLY</div>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '0' }}>
              <span style={{ fontStyle: 'italic', fontSize: '56px', fontWeight: '700', lineHeight: 1 }}>P</span>
              <span style={{ fontSize: '42px', fontWeight: '400', lineHeight: 1 }}>laylist</span>
            </div>

            {/* 빈닐 디스크 */}
            <div style={{ position: 'relative', width: '300px', height: '170px', margin: '16px auto 0', overflow: 'hidden' }}>
              <div style={{
                position: 'absolute', bottom: '-100px', left: '50%', transform: 'translateX(-50%)',
                width: '300px', height: '300px', borderRadius: '50%',
                background: '#111',
                boxShadow: 'inset 0 0 0 36px #1a1a1a, inset 0 0 0 37px #333, inset 0 0 0 80px #111, inset 0 0 0 81px #2a2a2a, inset 0 0 0 120px #111'
              }}>
                {/* 중앙 흰 원 */}
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '60px', height: '60px', borderRadius: '50%', background: '#e8e6de' }} />
                {/* 앨범 이미지들 */}
                {playlist.slice(0, 5).map((song, i) => {
                  const angles = [-65, -30, 5, 40, 75];
                  const r = 108;
                  const angle = (angles[i] * Math.PI) / 180;
                  const x = 150 + r * Math.sin(angle) - 20;
                  const y = 150 - r * Math.cos(angle) - 20;
                  return (
                    <div key={song.id} style={{ position: 'absolute', left: `${x}px`, top: `${y}px`, width: '40px', height: '40px', borderRadius: '6px', overflow: 'hidden', border: '1.5px solid rgba(255,255,255,0.25)' }}>
                      <img src={song.cover} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  );
                })}
                {playlist.slice(0, 5).map((_, i) => {
                  const angles = [-65, -30, 5, 40, 75];
                  const r = 76;
                  const angle = (angles[i] * Math.PI) / 180;
                  const x = 150 + r * Math.sin(angle) - 7;
                  const y = 150 - r * Math.cos(angle) - 7;
                  return (
                    <div key={i} style={{ position: 'absolute', left: `${x}px`, top: `${y}px`, fontSize: '9px', color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace' }}>
                      0{i + 1}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 트랙 리스트 */}
            {playlist.length > 0 && (
              <div style={{ background: 'white', border: '1px solid #ddd', borderRadius: '0 0 12px 12px', padding: '16px 28px', fontFamily: 'monospace', fontSize: '13px' }}>
                {playlist.slice(0, 5).map((song, i) => (
                  <div key={song.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '3px 0', color: '#444' }}>
                    <span style={{ color: '#bbb', marginRight: '16px' }}>0{i + 1}</span>
                    <span style={{ textAlign: 'right' }}>{song.title}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 편집 리스트 */}
          <h2 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '14px', fontFamily: 'monospace', letterSpacing: '1px' }}>
            현재 플레이리스트 ({playlist.length}곡)
          </h2>

          {playlist.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px', color: '#bbb', border: '1.5px dashed #ddd', borderRadius: '16px', fontFamily: 'monospace', fontSize: '13px' }}>
              노래 추가하기 버튼으로 곡을 추가해보세요
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {playlist.map((song, index) => (
                <div key={song.id} style={{ background: 'white', borderRadius: '14px', padding: '12px 16px', border: '1px solid #e5e5e5', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: '#bbb', fontSize: '12px', minWidth: '20px', fontFamily: 'monospace' }}>{String(index + 1).padStart(2, '0')}</span>
                  <img src={song.cover} alt={song.title} style={{ width: '44px', height: '44px', borderRadius: '8px', objectFit: 'cover' }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: '600', fontSize: '14px' }}>{song.title}</div>
                    <div style={{ fontSize: '11px', color: '#999' }}>{song.artist}</div>
                  </div>
                  <button onClick={() => removeFromPlaylist(song.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ccc', fontSize: '18px' }}>×</button>
                </div>
              ))}
            </div>
          )}

          {playlist.length > 0 && (
            <div style={{ marginTop: '20px' }}>
              <button onClick={savePlaylist} style={{ width: '100%', padding: '14px', background: 'white', border: '1.5px solid #111', borderRadius: '14px', cursor: 'pointer', fontSize: '14px', fontFamily: 'monospace', letterSpacing: '1px' }}>
                플레이리스트 저장
              </button>
              {saveMessage && (
                <div style={{ marginTop: '8px', padding: '12px', background: '#4caf50', color: 'white', borderRadius: '10px', textAlign: 'center', fontSize: '13px', fontFamily: 'monospace' }}>
                  {saveMessage}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* 검색 모달 */}
      {isModalOpen && (
        <div onClick={() => setIsModalOpen(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div onClick={e => e.stopPropagation()} style={{ background: 'white', borderRadius: '20px', width: '480px', maxHeight: '80vh', display: 'flex', flexDirection: 'column', overflow: 'hidden', border: '1.5px solid #111' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', borderBottom: '1px solid #eee' }}>
              <span style={{ fontWeight: '700', fontSize: '15px', fontFamily: 'monospace' }}>노래 찾기</span>
              <button onClick={() => setIsModalOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '20px', color: '#888' }}>×</button>
            </div>
            <div style={{ padding: '12px 20px', borderBottom: '1px solid #eee' }}>
              <input
                autoFocus
                type="text"
                placeholder="노래 제목 또는 가수 검색"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #111', borderRadius: '10px', fontSize: '14px', outline: 'none', boxSizing: 'border-box', fontFamily: 'monospace' }}
              />
            </div>
            <div style={{ overflowY: 'auto', flex: 1 }}>
              {filteredSongs.length === 0
                ? <div style={{ padding: '32px', textAlign: 'center', color: '#aaa', fontFamily: 'monospace', fontSize: '13px' }}>검색 결과가 없어요</div>
                : filteredSongs.map(song => {
                  const alreadyAdded = !!playlist.find(s => s.id === song.id);
                  return (
                    <div key={song.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 20px', borderBottom: '1px solid #f5f5f5' }}>
                      <img src={song.cover} alt={song.title} style={{ width: '44px', height: '44px', borderRadius: '8px', objectFit: 'cover' }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '14px', fontWeight: '600' }}>{song.title}</div>
                        <div style={{ fontSize: '11px', color: '#888' }}>{song.artist}</div>
                      </div>
                      <button
                        onClick={() => addToPlaylist(song)}
                        disabled={alreadyAdded}
                        style={{ padding: '6px 14px', borderRadius: '20px', fontSize: '12px', cursor: alreadyAdded ? 'default' : 'pointer', border: '1px solid #ddd', fontFamily: 'monospace', background: alreadyAdded ? '#f0f0f0' : '#111', color: alreadyAdded ? '#aaa' : 'white' }}
                      >
                        {alreadyAdded ? '추가됨' : '추가'}
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
