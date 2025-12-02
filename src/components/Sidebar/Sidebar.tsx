import { useAuth } from '@/context/useAuth';
import { DollarSign, LayoutDashboard, LogOut, NotebookPen } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Sidebar() {

  const { signout } = useAuth();

  return (
   <>
      <aside className="bg-background w-56 justify-center shadow pt-10 flex fixed bottom-0 top-0">
        <div className="flex flex-col gap-8 items-start">
          <h3 className="mb-10 text-lg font-bold">Gerenciar Salário</h3>
            <div>
              <Link
                to="/home"
                className="flex text[-sm gap-2 rounded-md px-3 py-2 hover:bg-accent hover:text-accent-foreground transition-all"           
              >
                <LayoutDashboard className='w-5 h-5' />
                Dashboard
              </Link>
            </div>
            <div>
              <Link
                to="/gastos"
                className="flex text[-sm gap-2 rounded-md px-3 py-2 hover:bg-accent hover:text-accent-foreground transition-all"           
              >
                <NotebookPen className='w-5 h-5' />
                Gastos
              </Link>
            </div>
            <div>
              <Link
                to="/renda"
                className="flex text[-sm gap-2 rounded-md px-3 py-2 hover:bg-accent hover:text-accent-foreground transition-all"           
              >
                <DollarSign className='w-5 h-5' />
                Renda
              </Link>
            </div>
       
          <div className="flex justify-center items-center">
            <button
              onClick={signout}
              className="flex text-sm gap-2 rounded-md px-3 py-2 hover:bg-accent hover:text-accent-foreground transition-all"           
            >
              <LogOut className="h-5 w-5" />
              Sair
            </button>
          </div>
        </div>
      </aside>
   </>
  )
}
