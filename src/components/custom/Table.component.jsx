import styled from 'styled-components';
import React from 'react';

const Table = styled.table`
	width: 100%;
	margin: 0;
	border-spacing: 2;
	border-collapse: collapse;
`;

const TableHead = styled.thead`
	font-size: 1.7rem;
	font-weight: bold;
	text-align: center;
	color: #41b3a3;
`;

const TableData = styled.td`
	font-size: 1.5rem;
	color: #60544e;
	text-align: left;
	vertical-align: middle;
	padding: 30px 35px 3px;
	border-bottom: 1px solid #b5a29b;
`;

const CustomTable = ({ title, itemsToShow, onRemove, onUpdate }) => {
	return (
		<Table>
			<TableHead>{title}</TableHead>
			<tbody>
				{itemsToShow.map(item => {
					return (
						<tr key={item.id}>
							<TableData>{item.name}</TableData>
						</tr>
					);
				})}
			</tbody>
		</Table>
	);
};

export default CustomTable;
