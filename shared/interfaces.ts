export interface ApiResponse {
  count: number
  next: string | null
  previous: string | null
  results: any
}

// ----------------- Space Interfaces -----------------
export interface Expedition {
  start: Date
  end: Date
  name: String
  id: number
  url: string
  mission_patches: [any]
  spacestation: Spacestation
  status: StatusOrType
}

export interface Docking {
  departure: Date
  docking: Date
  docking_location: DockingLocation
  flight_vehicle: FlightVehicle
  launch_id: number | null
  url: String
}

interface DockingLocation {
  id: number
  name: String
  spacestation: Spacestation
}

interface FlightVehicle {
  destination: string
  id: number
  mission_end: Date
  spacecraft: Spacecraft
  url: string
}

export interface Agency {
  abbrev?: string
  adminstrator?: string
  country_code?: string
  description?: string
  featured?: boolean
  founding_year?: string
  id: number
  image_url?: string
  launchers?: string
  name: string
  parent?: string
  spacecraft?: string
  type?: string
  url: string
}

export interface Astronaut {
  agency: Agency
  bio: string
  date_of_birth: Date
  date_of_death: Date | null
  first_flight: Date | null
  id: number
  instagram?: string | null
  last_flight: Date | null
  name: string
  nationality: string
  profile_image: string
  profile_image_thumbnail: string
  status: StatusOrType
  twitter?: string | null
  type: StatusOrType
  url: string | null
  wiki?: string | null
}
export interface Spacestation {
  deorbited?: Date | null
  description?: string
  founded?: Date
  id: number
  image_url?: string | null
  name: string
  orbit?: string
  owners?: Agency[]
  status: StatusOrType
  type?: StatusOrType
  url: string
}

export interface Spacecraft {
  description: String
  name: String
  id: number
  serial_number: number
  spacecraft_config: SpacecraftConfig
  status: StatusOrType
  url: string
}

interface SpacecraftConfig {
  agency: Agency
  id: number
  image_url: string
  in_use: boolean
  name: string
  type: StatusOrType
  url: string
}

export interface LaunchVehicle {
  details: string
  first_launch_date: Date | null
  flight_proven: boolean | null
  flights: number
  id: number
  image_url: string
  last_launch_date: Date | null
  launcher_config: Configuration
  serial_number: string
  status: string
  url: string
}

export interface Location {
  country_code: string
  id: number
  map_image: string
  name: string
  total_landing_count: number
  total_launch_count: number
  url: string
}

export interface Launch {
  failreason: string
  hashtag: string | null
  holdreason: string
  id: string
  image: string
  infographic: string | null
  last_updated: Date | null
  launch_service_provider: Provider
  mission: Mission
  name: string
  net: Date
  pad: Pad
  probability: number
  program: SpacestationProgram[]
  rocket: Configuration
  slug: string
  status: StatusOrType
  url: string
  webcast_live: boolean
  window_end: Date | null
  window_start: Date | null
}
export interface Event {
  date: Date
  description: string
  expeditions: Expedition[]
  feature_image: string
  id: number
  launches: Launch[]
  location: string
  name: string
  news_url: string | null
  program: SpacestationProgram
  slug: string
  spacestation: Spacestation[]
  type: StatusOrType
  updates: []
  url: string
  video_url: string | null
  webcast_live: boolean
}

interface SpacestationProgram {
  agencies: Agency[]
  description: string
  end_date: Date | null
  id: number
  image_url: string | null
  info_url: string
  mission_patches: []
  name: string
  start_date: Date | null
  url: string
  wiki_url: string | null
}
interface StatusOrType {
  id: number
  name: string
}

interface Provider {
  id: number
  name: string
  type: string
  url: string
}

interface Mission {
  description: string
  id: number
  launch_designator: string | null
  name: string
  orbit: Orbit
  type: string
}

interface Orbit {
  abbrev: string
  id: number
  name: string
}

interface Pad {
  agency_id: number | null
  id: number
  info_url: string | null
  latitude: string
  location: Location
  longitude: string
  map_image: string | null
  name: string
  total_launch_count: number
  url: string
  wiki_url: string
}

interface Configuration {
  family: string
  full_name: string
  id: number
  name: string
  url: string
  variant: string
}


export interface SortOption {
    value: string,
    label: string,
}