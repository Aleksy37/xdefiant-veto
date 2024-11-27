export interface User {
    id: string;
    discord_id: string;
    username: string;
    avatar_url: string;
  }
  
  export interface VetoSettings {
    mapsToPlay: number;
    bansPerUser: number;
    firstTurn: 'host' | 'guest' | 'random';
    gameModes: string[];
  }
  
  export interface LobbyData {
    id: string;
    hostId: string;
    guestId?: string;
    settings: VetoSettings;
    status: 'WAITING' | 'IN_PROGRESS' | 'COMPLETED';
    currentTurn?: string;
    availableMaps: string[];
    picks: string[];
    bans: string[];
  }