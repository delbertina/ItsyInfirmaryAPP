'use client';

import { SupplyItem } from "@/app/types/supply-item";
import { Card, CardContent, CardHeader } from "@mui/material";

export interface SupplyItemCardProps {
    item: SupplyItem;
}

function SupplyItemCard(props: SupplyItemCardProps) {
  return (
    <Card>
        <CardHeader title={props.item.name} />
        <CardContent>
            {props.item.description}
            <hr />
            <strong>Perishable: {props.item.isPerishable.toString()}</strong>
        </CardContent>
    </Card>
  );
}

export default SupplyItemCard;
