"use client";

import { useState } from "react";
import { AdventDoor } from "./advent-door";
import { PrizeModal } from "./prize-modal";

interface Prize {
	title: string;
	description: string;
	image: string;
	isSpecial?: boolean;
}

const prizes: Record<number, Prize> = {
	1: { title: 'Día 1', description: 'Casi... Prueba el día 4.', image: '/Ibai-1.webp' },
    2: { title: 'Día 2', description: 'Casi... Prueba el día 4.', image: '/Ibai-2.jpg' },
    3: { title: 'Día 3', description: 'Casi... Prueba el día 4.', image: '/Ibai-3.jpg' },
    4: { title: '¡Hola, equipo de InfoJobs y midudev!', description: 'Hola, soy Joaquín y estoy listo para desarrollar el resto del calendario.', image: '/Midu-5.jfif', isSpecial: true },
    5: { title: 'Día 5', description: 'Casi... Prueba el día 4.', image: '/Ibai-5.jpg' },
    6: { title: 'Día 6', description: 'Casi... Prueba el día 4.', image: '/Ibai-6.webp' },
    7: { title: 'Día 7', description: 'Casi... Prueba el día 4.', image: '/Ibai-7.jpg' },
    8: { title: 'Día 8', description: 'Casi... Prueba el día 4.', image: '/Ibai-8.jpg' },
    9: { title: 'Día 9', description: 'Casi... Prueba el día 4.', image: '/Ibai-9.jfif' },
    10: { title: 'Día 10', description: 'Casi... Prueba el día 4.', image: '/Ibai-10.jpg' },
    11: { title: 'Día 11', description: 'Casi... Prueba el día 4.', image: '/Ibai-11.jpg' },
    12: { title: 'Día 12', description: 'Casi... Prueba el día 4.', image: '/Ibai-12.jfif' },
    13: { title: 'Día 13', description: 'Casi... Prueba el día 4.', image: '/Ibai-13.jfif' },
    14: { title: 'Día 14', description: 'Casi... Prueba el día 4.', image: '/Ibai-14.jpg' },
    15: { title: 'Día 15', description: 'Casi... Prueba el día 4.', image: '/Ibai-15.webp' },
    16: { title: 'Día 16', description: 'Casi... Prueba el día 4.', image: '/Ibai-16.webp' },
    17: { title: 'Día 17', description: 'Casi... Prueba el día 4.', image: '/Ibai-17.webp' },
    18: { title: 'Día 18', description: 'Casi... Prueba el día 4.', image: '/Ibai-18.avif' },
    19: { title: 'Día 19', description: 'Casi... Prueba el día 4.', image: '/Midu-1.jfif' },
    20: { title: 'Día 20', description: 'Casi... Prueba el día 4.', image: '/Midu-2.jfif' },
    21: { title: 'Día 21', description: 'Casi... Prueba el día 4.', image: '/Midu-3.jfif' },
    22: { title: 'Día 22', description: 'Casi... Prueba el día 4.', image: '/Midu-4.jfif' },
    23: { title: 'Día 23', description: 'Casi... Prueba el día 4.', image: '/Ibai-4.jpg' },
    24: { title: 'Día 24', description: 'Casi... Prueba el día 4.', image: '/Midu-7.png' },
    25: { title: 'Día 25', description: 'Casi... Prueba el día 4.', image: '/Midu-8.jpg' },
    26: { title: 'Día 26', description: 'Casi... Prueba el día 4.', image: '/Midu-9.jpg' },
    27: { title: 'Día 27', description: 'Casi... Prueba el día 4.', image: '/Midu-10.jpg' },
    28: { title: 'Día 28', description: 'Casi... Prueba el día 4.', image: '/Midu-11.jpg' }
};

export function AdventCalendar() {
	const [selectedDoor, setSelectedDoor] = useState<number | null>(null);
	const [openedDoors, setOpenedDoors] = useState<Set<number>>(new Set());

	const handleDoorClick = (day: number) => {
		setSelectedDoor(day);
		setOpenedDoors((prev) => new Set([...prev, day]));
	};

	const handleCloseModal = () => {
		setSelectedDoor(null);
	};

	return (
		<>
			<div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 max-w-6xl mx-auto">
				{Array.from({ length: 28 }, (_, i) => i + 1).map((day) => (
					<AdventDoor
						key={day}
						day={day}
						isOpened={openedDoors.has(day)}
						onClick={() => handleDoorClick(day)}
					/>
				))}
			</div>

			{selectedDoor && (
				<PrizeModal prize={prizes[selectedDoor]} onClose={handleCloseModal} />
			)}
		</>
	);
}
