import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from "next/router";

const Sidebar = () => {

    var is_active = (path: string) => {
        const router = useRouter();
        return router.pathname.startsWith(path) ? "is-active" : "";
    }

    return (
        <aside className="menu">
            <div className="sidebar-brand">
                <a className="sidebar-brand-link" href="/">
                    🏥 CliniSol
                </a>
            </div>
            <div className="sidebar-user">
                <Image
                    src="https://picsum.photos/id/1005/200/200.jpg"
                    alt="Picture of the user"
                    width="80px"
                    height="80px"
                    style={{ borderRadius: 20 }}
                />
                <div className="sidebar-user-details">
                    <p className="sidebar-user-name">Nishal Kulkarni</p>
                    <p className="sidebar-user-priv">Admin</p>
                </div>
                <span className="icon is-right sidebar-user-logout">
                    <Link href={'/logout'}>
                        <a className="material-icons">logout</a>
                    </Link>
                </span>
            </div>

            <p className="menu-label">
                General
            </p>
            <ul className="menu-list">
                <li>
                    <Link href={'/'}>
                        <a className={is_active("/dashboard")}>
                            <span className="icon is-right">
                                <span className="material-icons">home</span>
                            </span>
                            Dashboard
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href={'/logout'}>
                        <a>
                            <span className="icon is-right">
                                <span className="material-icons">logout</span>
                            </span>
                            Logout
                        </a>
                    </Link>
                </li>
            </ul>
            <hr />
            <p className="menu-label">
                Clinic Administration
            </p>
            <ul className="menu-list">
                <li>
                    <Link href={'/appointments/manageAppointment'}>
                        <a className={is_active("/appointments/manageAppointment")}>
                            <span className="icon is-right">
                                <span className="material-icons">calendar_month</span>
                            </span>
                            Schedule Appointment
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href={'/patients/addPatient'}>
                        <a className={is_active("/patients/addPatient")}>
                            <span className="icon is-right">
                                <span className="material-icons">personal_injury</span>
                            </span>
                            Add Patient
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href={'/patients/patientRecords'}>
                        <a className={is_active("/patients/patientRecords")}>
                            <span className="icon is-right">
                                <span className="material-icons">menu_book</span>
                            </span>
                            View Patient Records
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href={'/doctors/manageDoctor'}>
                        <a className={is_active("/doctors/manageDoctor")}>
                            <span className="icon is-right">
                                <span className="material-icons">person_add</span>
                            </span>
                            Manage Doctors
                        </a>
                    </Link>
                </li>
            </ul>
            <hr />
            <p className="menu-label">
                Portal Management
            </p>
            <ul className="menu-list">
                <li>
                    <Link href={'/backup/generateBackup'}>
                        <a className={is_active("/backup/generateBackup")}>
                            <span className="icon is-right">
                                <span className="material-icons">backup</span>
                            </span>
                            Generate Backup
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href={'/staff/manageStaff'}>
                        <a className={is_active("/staff/manageStaff")}>
                            <span className="icon is-right">
                                <span className="material-icons">admin_panel_settings</span>
                            </span>
                            Manage Admins {'&'} Staff
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href={'/misc/contactSupport'}>
                        <a className={is_active("/misc/contactSupport")}>
                            <span className="icon is-right">
                                <span className="material-icons">contact_support</span>
                            </span>
                            Contact Support
                        </a>
                    </Link>
                </li>
            </ul>
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

                .menu {
                    position: fixed;
                    width: 20%;
                    left: 0px;
                    top: 0px;
                    height: 100%;
                    overflow-y: auto;
                    background: #283342;
                    font-family: 'Poppins', sans-serif;
                }

                .menu-label {
                    padding: 0 1rem;
                    color: #FFFFFF;
                    font-weight: 600;
                }

                .menu-list {
                    padding: 0 1rem;
                    font-size: 1.25rem;
                }

                .menu-list li {
                    margin: 0.75rem 0;
                }

                .menu-list a.is-active {
                    background-color: #009099;
                }

                .menu-list a {
                    color: #FFFFFF;
                    display: flex;
                    gap: 0.75rem;
                }

                .menu-list a:hover {
                    background-color: rgba(0, 144, 153, 0.5);
                }

                hr {
                    background: rgba(255,255,255, 0.25);
                }

                .sidebar-brand {
                    background: #1D242E;
                    height: 4rem;
                    line-height: 4rem;
                    text-align: center;
                }

                .sidebar-brand-link { 
                    color: #FFFFFF;
                    font-size: 2rem;
                }

                .sidebar-brand-link hover{ 
                    text-decoration: underline;
                }

                .sidebar-user {
                    padding: 3rem 1rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .sidebar-user-details {
                    
                }

                .sidebar-user-name {
                    font-size: 1.6rem;
                    color: #FFFFFF;
                }

                .sidebar-user-priv {
                    font-size: 1rem;
                    color: #FED600;
                }

                .sidebar-user-logout a {
                    font-size: 2rem;
                    color: #FFFFFF;
                }

                .menu-list {
                    color: #FFFFFF;
                }

                .branding {
                    position: absolute;
                    width: 20%;
                    left: 0px;
                    top: 0px;
                    background: #1D242E;
                }
            `}</style>
        </aside>
    );
};

export default Sidebar;
