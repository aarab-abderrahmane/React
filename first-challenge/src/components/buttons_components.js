export default function Buttons(){
    const buttons = [];
    for (let count = 1 ; count<12 ; count++){

        buttons.push(<button key={count}>button tage {count}</button>)

    }

    return (
        <>
            {buttons}
        </>
    )

}