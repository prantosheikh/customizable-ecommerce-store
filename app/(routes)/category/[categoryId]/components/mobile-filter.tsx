"use client";

import Button from "@/components/ui/Button";
import { Color, Size } from "@/types";
import { Dialog } from "@headlessui/react";
import { Plus } from "lucide-react";
import React, { useState } from "react";

interface MobileFilterProps {
	sizes: Size[];
	colors: Color[];
}

const MobileFilter: React.FC<MobileFilterProps> = ({ sizes, colors }) => {
	const [open, setOpen] = useState(false);

	const onOpen = () => setOpen(true);
	const onClose = () => setOpen(false);

	return (
		<div>
			<Button
				onClick={onOpen}
				className="flex items-center gap-x-2 lg:hidden"
			>
				Filter
				<Plus size={20} />
			</Button>

			<Dialog
				open={open}
				as="div"
				className="relative z-40 lg:hidden"
				onClose={onClose}
			>
				<div className="fixed inset-0 bg-black bg-opacity-25 ">
					<Dialog.Panel className="relative ml-auto flex h-full w-full"></Dialog.Panel>
				</div>
			</Dialog>
		</div>
	);
};

export default MobileFilter;
