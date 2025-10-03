export default function Interests (){

    return (
    <div className="mb-3">
          <label className="form-label">Centres d’intérêt</label>
          <br />
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              name="interets"
              value="Sport"
            />
            <label className="form-check-label">Sport</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              name="interets"
              value="Lecture"
            />
            <label className="form-check-label">Lecture</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              name="interets"
              value="Voyage"
            />
            <label className="form-check-label">Voyage</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              name="interets"
              value="Programmation"
            />
            <label className="form-check-label">Programmation</label>
          </div>
          <div id="interetError" className="error"></div>
        </div>

    )

}