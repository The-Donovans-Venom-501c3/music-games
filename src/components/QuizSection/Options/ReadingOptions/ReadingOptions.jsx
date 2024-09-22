import { DndContext } from '@dnd-kit/core';
import { Draggable } from './Draggable';
import { Droppable } from './Droppable';
import { useState } from 'react';
import React from 'react';

const notes = ["C", "D", "E", "F", "G", "A", "B"];

export default function ReadingOptions({ displayText, currQuestion }) {
    const draggables = notes.map((note, index) => (
        <Draggable key={note} id={`draggable-${note}`}>
            {note}
        </Draggable>
    ));

    return (
        <div className="small-btn-wrapper">
            {draggables}
        </div>
    );
}
