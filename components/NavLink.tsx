import React from 'react';
import styles from '../styles/NavLink.module.scss';
import { IconContext } from 'react-icons';

import { Nav, Container, Col } from 'react-bootstrap';

import { useRouter } from 'next/router';
import Link from 'next/link';

interface Props {
	href: string;
	icon: JSX.Element;
	title: string;
	onClick?: () => void;
}

const NavLink: React.FC<Props> = ({ href, icon, title, onClick }) => {
	const router = useRouter();

	let className = '';
	if (router.pathname.includes(href)) {
		className = styles.active;
	}

	return (
		<Nav.Item>
			<Link href={href} passHref>
				<Nav.Link className={className}>
					<Container onClick={onClick && onClick}>
						<Col>
							<IconContext.Provider
								value={{
									color: className === styles.active ? '#fff' : '#B8B8B9',
									size: className === styles.active ? '1.11em' : '1em'
								}}>
								{icon}
							</IconContext.Provider>
							<span className='mx-2'>{title}</span>
						</Col>
					</Container>
				</Nav.Link>
			</Link>
		</Nav.Item>
	);
};

export default NavLink;
