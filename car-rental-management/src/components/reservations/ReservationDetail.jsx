import ProfileCard from "../ui/ProfileCard";
import { StyledDiv } from "../ui/StyledDiv";
import Table from "../ui/Table";


const tableTitle = [
    {}
]

export default function ReservationDetail({name, imageURL, email}){
    return(
        <StyledDiv>
            <div>
                User detail
                <ProfileCard urlPhoto={imageURL} name={name} role={email} />
                <div> Delivery Slot</div>
            </div>

         <Table tableTitle={tableTitle}>

         </Table>

        </StyledDiv>
    )

}