// Game types
export interface GameDescription {
  text: string;
}

export interface GameData {
  title: string;
  description: GameDescription[];
  videoUrl: string;
  backgroundVideo: string;
}

// Agents types
export interface AgentInfo {
  name: string;
  description: string;
}

export interface Agent {
  id: string;
  image: string;
  info: AgentInfo;
}

export interface AgentsData {
  agents: Agent[];
}

// Weapons types
export interface WeaponInfo {
  name: string;
  description: string;
}

export interface Weapon {
  id: string;
  image: string;
  info: WeaponInfo;
}

export interface WeaponsData {
  weapons: Weapon[];
}

// Maps types
export interface MapInfo {
  name: string;
  description: string;
}

export interface Map {
  id: string;
  image: string;
  info: MapInfo;
}

export interface MapsData {
  maps: Map[];
}