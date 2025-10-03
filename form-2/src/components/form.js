import Input from "./Input";
import Genre from './genre'
import Interests from './Interests'

function Form() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Formulaire d'inscription</h2>
      <form id="myForm" novalidate>
        <Input InputId={"name"} />
        <Input InputId={"email"} />
        <Input InputId={"pwd"} />

        {/* <!-- Genre --> */}
        <Genre/>

        {/* <!-- Centres d’intérêt --> */}
        <Interests />

        {/* <!-- Pays --> */}
        <div className="mb-3">
          <label for="pays" className="form-label">
            Pays
          </label>
          <select className="form-select" id="pays" name="pays" required>
            <option value="">--Choisir un pays--</option>
            <option value="France">France</option>
            <option value="Maroc">Maroc</option>
            <option value="Canada">Canada</option>
            <option value="Sénégal">Sénégal</option>
          </select>
          <div className="invalid-feedback">Veuillez sélectionner un pays.</div>
        </div>

        {/* <!-- Bouton --> */}
        <button type="submit" className="btn btn-primary">
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default Form;
