export interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  price: number
  image: string
  category: string
}

export interface StaffPosition {
  id: string
  title: string
  hourlyRate: number
  location: string
  type: "Full-time" | "Part-time" | "Contract" | "Freelance"
}

export interface FAQ {
  question: string
  answer: string
}
