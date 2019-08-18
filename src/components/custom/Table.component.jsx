import React from 'react';
import styled from 'styled-components';
import iconTypes from '../../static/iconTypes';
import CustomIcon from './Icon.component';

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
`;

const RowDiv = styled.td`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 30px 5px 3px 35px;
	border-bottom: 1px solid #b5a29b;
`;

const InnerDiv = styled.td`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const CustomTable = ({ title, itemsToShow, onRemove, onUpdate }) => {
	return (
		<Table>
			<TableHead>{title}</TableHead>
			<tbody>
				{itemsToShow.map(item => {
					return (
						<tr key={item.id}>
							<RowDiv>
								<TableData>{item.name}</TableData>
								<InnerDiv>
									<div onClick={() => onRemove(item.id)}>
										<CustomIcon
											iconName={iconTypes.delete}
										/>
									</div>
									<div onClick={onUpdate}>
										<CustomIcon iconName={iconTypes.edit} />
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
