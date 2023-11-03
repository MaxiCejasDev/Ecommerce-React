import { useParams } from "react-router-dom"

export const ItemDetailContainer = () => {
  const { pid } = useParams()
  console.log(pid)



  return (
    <div>ItemDetailContainer</div>
  )
}
