import SERVICES from '../../services.json'

interface Service {
  title: string
  url: string
  selector: string
}

interface Services {
  [service: string]: Service
}

export default (service: string): Service => (SERVICES as Services)[service]
