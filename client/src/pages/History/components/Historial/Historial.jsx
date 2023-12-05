import React from 'react'
import personas from '../../../../db/db_registros'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const Historial = () => {
  const onDragEnd = (result) => {
    // Lógica para manejar el final del arrastrar y soltar
    if (!result.destination) {
      return
    }

    // Lógica para actualizar el orden de las personas en tu estado o fuente de datos
    const items = Array.from(personas)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    // Actualiza tu estado o fuente de datos con el nuevo orden
    // this.setState({ personas: items });  // Si `personas` es parte del estado
    // O realiza cualquier otra acción necesaria

    // Nota: Puedes adaptar esta lógica según la estructura específica de tus datos.
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className='w-full h-full place-content-center'>
        <Droppable droppableId='historial'>
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className='grid grid-cols-5 w-full rounded-lg border-2 border-colorCustom1 overflow-hidden'
            >
              {/* Resto del código */}
              {/* ... */}
              <div className='col-span-5 p-2 bg-red-300'>
                {personas.map((persona, index) => (
                  <Draggable key={persona.id} draggableId={persona.id.toString()} index={index}>
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        className='col-span-5 p-2 bg-white border-2 text-base text-red-500'
                      >
                        <p>{persona.nombre}</p>
                        {/* ... */}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
              {/* ... */}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  )
}

export default Historial
