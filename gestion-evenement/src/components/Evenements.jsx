import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter
} from "./ui/table"



const Evenement = ({expert})=>{

    const costTotalevent = expert?.événements.reduce((acc,ev)=>{return acc+(ev.cout_journalier*ev.durée) },0) || 0



    return (
        <div className="w-[90vw] border-2 p-2">
            <h1><b>nom :</b> {expert?.nom_complet}</h1>
            <h1><b>id :</b> {expert?.id}</h1>
            <hr></hr>

        <Table>
        <TableHeader>
            <TableRow>
            <TableHead className="w-[100px]">thème</TableHead>
            <TableHead>date_debut</TableHead>
            <TableHead>date_fin</TableHead>
            <TableHead className="text-right">description</TableHead>
            <TableHead className="text-right">cout_journalier</TableHead>
            <TableHead className="text-right">durée</TableHead>
            <TableHead className="text-right">Cout Total Evénement</TableHead>


            </TableRow>
        </TableHeader>
        <TableBody>
            {expert?.événements.map((ev,index) => 
            <TableRow key={index}>
                <TableCell className="font-medium">{ev.thème}</TableCell>
                <TableCell>{ev.date_debut}</TableCell>
                <TableCell>{ev.date_fin}</TableCell>
                <TableCell className="text-right">{ev.description}</TableCell>
                <TableCell className="text-right">{ev.cout_journalier} DH</TableCell>
                <TableCell className="text-right">{ev.durée}</TableCell>
                <TableCell className="text-right">{parseInt(ev.durée)*parseFloat(ev.cout_journalier)} DH</TableCell>


            </TableRow>
            )}
        </TableBody>
        <TableFooter>
            <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">{costTotalevent} DH</TableCell>
            </TableRow>
        </TableFooter>
        </Table>
        </div>
  )

}


export default Evenement;