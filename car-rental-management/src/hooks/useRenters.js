import { useSearchParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getRenters } from "../services/requests/api-renters";
import { PAGE_SIZE } from "../services/constants";

export default function UseRenters(pag) {

    const [searchParams] = useSearchParams()
    const queryClient =  useQueryClient()

    const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  
  const { data: { renters, count } = {}, isLoading } = useQuery({
    queryKey: ["renters", currentPage],
    queryFn: () => getRenters(currentPage, pag),
    keepPreviousData: true,
  });

  const pageNumbers = Math.ceil(count/PAGE_SIZE)

  // prefetch 
  if(currentPage < pageNumbers){
    queryClient.prefetchQuery({
      queryKey: ["rent"],
      queryFn: () => getRenters(currentPage + 1)
    })
  
  }

  if(currentPage > 1){
    queryClient.prefetchQuery({
      queryKey: ["rent"],
      queryFn: () => getRenters(currentPage - 1)
    })
  }



  return {renters, count, isLoading};
}
