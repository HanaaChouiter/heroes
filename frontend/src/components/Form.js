import { useContext, useState } from "react"
import { HeroesContext } from "../contexts/Heroes"

const Form = () => {
  const { getHeroes, setNewHero } = useContext(HeroesContext)
  const [name, setName] = useState("")
  const [slug, setSlug] = useState("")
  const [power, setPower] = useState([])
  const [color, setColor] = useState("")
  const [isAlive, setIsAlive] = useState("")
  const [age, setAge] = useState()
  const [image, setImage] = useState("")
  const [error, setError] = useState("")
  
  const handleSubmit = e => {
    e.preventDefault()
  
    const hero = {
        slug : slug,
        name : name,
        power : [power],
        color : color,
        isAlive : Boolean(isAlive),
        age : parseInt(age),
        image : image
    }

    fetch('http://localhost:5000/heroes', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(hero)
    })
      .then(response => response.json())
      .then(data => {
        setNewHero(data)
        getHeroes()
        setError("")
      })
      .catch(error => setError(<p className="text-danger fs-4 fw-bold">Ce héro existe déjà</p>))
  }

  return (
    <>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="mb-3">
            <div className="row">
                <div className="col-6">
                    <label className="text-light form-label">Slug</label>
                    <input 
                        type="text"
                        className="form-control"
                        value={slug}
                        onChange={(e) => setSlug(e.target.value)}
                    />
                </div>
                <div className="col-6">
                    <label className="text-light form-label">Name</label>
                    <input 
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
            </div>

            <div className="row my-2">
                <div className="col-6">
                    <label className="text-light form-label">Power</label>
                    <input 
                        type="text"
                        className="form-control"
                        value={power}
                        onChange={(e) => setPower(e.target.value)}
                    />
                </div>
                <div className="col-6">
                    <label className="text-light form-label">Color</label>
                    <input 
                        type="text"
                        className="form-control"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                    />
                </div>
            </div>

            <div className="row my-2">
                <div className="col-6">
                    <label className="text-light form-label">IsAlive</label>
                    <select className="form-select" aria-label="Default select example">
                      <option value={isAlive} onChange={(e) => setIsAlive(e.target.value)}>true</option>
                      <option value={isAlive} onChange={(e) => setIsAlive(e.target.value)}>false</option>
                    </select>
                    {/* <input 
                        type="text"
                        className="form-control"
                        value={isAlive}
                        onChange={(e) => setIsAlive(e.target.value)}
                    /> */}
                </div>
                <div className="col-6">
                    <label className="text-light form-label">Age</label>
                    <input 
                        type="number"
                        className="form-control"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>
            </div>

            <div className="row my-2">
                <div className="col-8">
                    <label className="text-light form-label">Image</label>
                    <input 
                        type="text"
                        className="form-control"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-dark"
          >
          Submit
          </button>
      </form>
      {error && <p>{error}</p>}
    </>
  )
}

export default Form