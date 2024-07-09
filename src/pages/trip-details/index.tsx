import { Plus } from "lucide-react";
import { useState } from "react";
import { CreateActivityModal } from "./create-activity-modal";
import { ImportantLink } from "./important-links";
import { Guests } from "./guests";
import { Activies } from "./acitivies";
import { DestinationDateTimeHeader } from "./destination-date-time-header";
import { Button } from "../../components/button";

export function TripDetailPage(){
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false)


  function openCreateActivityModal(){
    setIsCreateActivityModalOpen(true)
  }


  function closeCreateActivityModal(){
    setIsCreateActivityModalOpen(false)

  }


  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <DestinationDateTimeHeader />

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6 ">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            
          <Button onClick={openCreateActivityModal} variant="secondary" size="default">
            <Plus className='size-5'/>
            Cadastrar atividades
          </Button> 
          </div>

          <Activies/>

         </div>

        <div className="w-80 space-y-6">
            <ImportantLink />

          <div className='w-full h-px bg-zinc-800'/>

          <div>
            <Guests  />
          </div>
        </div>
      </main>
     



    {isCreateActivityModalOpen && (

      <CreateActivityModal closeCreateActivityModal={closeCreateActivityModal}/>
    )}
     </div> 
  )
}