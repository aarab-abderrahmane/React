export default function Gnere(){


    return (

         <div className="mb-3">
          <label className="form-label">Genre</label>
          <br></br>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="genre"
              id="homme"
              value="Homme"
              required
            />
            <label className="form-check-label" for="homme">
              Homme
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="genre"
              id="femme"
              value="Femme"
            />
            <label className="form-check-label" for="femme">
              Femme
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="genre"
              id="autre"
              value="Autre"
            />
            <label className="form-check-label" for="autre">
              Autre
            </label>
          </div>
          <div className="invalid-feedback d-block">
            Veuillez sélectionner un genre.
          </div>
        </div>
    )
}