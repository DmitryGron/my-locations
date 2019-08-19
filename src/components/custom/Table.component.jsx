import React from 'react';
import styled from 'styled-components';
import iconTypes from '../../static/iconTypes';
import ActionIcon from './ActionIcon.component';

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

const TableData = styled.div`
	font-size: 1.5rem;
	color: #60544e;
	text-align: left;
`;

const RowDiv = styled.td`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 30px 5px 3px 35px;
	border-bottom: 1px solid #b5a29b;
`;

const InnerDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const CustomTable = ({ title, itemsToShow, onRemove, onUpdate }) => {
	return (
		<Table>
			<TableHead>
				<tr>
					<td>{title}</td>
				</tr>
			</TableHead>
			<tbody>
				{itemsToShow.map(item => {
					return (
						<tr key={item.id}>
							<RowDiv>
								<TableData>{item.name}</TableData>
								<InnerDiv>
									<div onClick={() => onRemove(item.id)}>
										<ActionIcon
											iconName={iconTypes.delete}
										/>
									</div>
									<div onClick={() => onUpdate(item.id)}>
										<ActionIcon iconName={iconTypes.edit} />
									</div>
								</InnerDiv>
							</RowDiv>
						</tr>
					);
				})}
			</tbody>
		</Table>
	);
};

export default CustomTable;
