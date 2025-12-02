import { useNavigate } from 'react-router-dom'
import { DropdownMenuItem } from '../ui/dropdown-menu'

export interface IDetailsTask {
  id: number;
}

export default function DetailsTask({ id }: IDetailsTask) {

  const navigate = useNavigate();

  return (
    <>
      <button className='w-full'>
        <DropdownMenuItem onClick={() => navigate(`/tarefa/${id}`)}>Detalhes</DropdownMenuItem>
      </button>
    </>
  )
}
