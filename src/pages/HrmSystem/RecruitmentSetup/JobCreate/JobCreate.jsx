import React from "react";
import styles from "./JobCreate.module.css";

export default function JobCreate() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.fullWidthContainer}>
          <h2 className={styles.textGreen}>Create Job</h2>
        </div>
        <div className={styles.lrContainer}>
          <div className={styles.leftDiv}>
            <form>
              <div>
                <label className={styles.jLabel} htmlFor="jobTitle">Job Title</label>
                <input
                  className={styles.formInput}
                  type="text"
                  id="jobTitle"
                  placeholder="Enter Job Title"
                />
              </div>
              <div className={styles.lrContainer}>
                <div>
                  <label className={styles.jLabel} htmlFor="branch">Branch</label>
                  <select className={styles.formInput} id="branch">
                    <option>All</option>
                    <option>India</option>
                    <option>China</option>
                    <option>Canada</option>
                    <option>U.S.A</option>
                    <option>U.K</option>
                  </select>
                </div>
                <div>
                  <label className={styles.jLabel} htmlFor="jobCategory">Job Category</label>
                  <select className={styles.formInput} id="jobCategory">
                    <option>Select</option>
                    <option>Fashion Jobs</option>
                    <option>Accounting Jobs</option>
                    <option>Business Jobs</option>
                    <option>Enjineering Jobs</option>
                  </select>
                </div>
              </div>
              <div className={styles.lrContainer}>
                <div>
                  <label className={styles.jLabel} htmlFor="positions">Positions</label>
                  <input className={styles.formInput} type="text" id="positions" />
                </div>
                <div>
                  <label className={styles.jLabel} htmlFor="status">Status</label>
                  <select className={styles.formInput} id="status">
                    <option>Active</option>
                  </select>
                </div>
              </div>
              <div className={styles.lrContainer}>
                <div>
                  <label className={styles.jLabel} htmlFor="startDate">Start Date</label>
                  <input
                    className={styles.formInput}
                    type="date"
                    id="startDate"
                    placeholder="dd-mm-yyyy"
                  />
                </div>
                <div>
                  <label className={styles.jLabel} htmlFor="endDate">End Date</label>
                  <input
                    className={styles.formInput}
                    type="date"
                    id="endDate"
                    placeholder="dd-mm-yyyy"
                  />
                </div>
              </div>
              <div>
                <label className={styles.jLabel} htmlFor="skill">Skill</label>
                <input className={styles.formInput} type="text" id="skill" />
              </div>
              <div>
                <label className={styles.jLabel} htmlFor="skill">Job Description</label>
                <input className={styles.formInput} type="" id="skill" />
              </div>
              <div>
                <label className={styles.jLabel} htmlFor="skill">Job Requirement</label>
                <input className={styles.formInput} type="textarea" id="skill" />
              </div>
            </form>
          </div>
          <div className={styles.rightDiv}>
            <form>
              <h5>Need to ask ?</h5>
              <div className={styles.checkboxGroup}>
                <div className={styles.checkboxContainer}>
                  <input className={styles.formInput} type="checkbox" id="gender" />
                  <label className={styles.jLabel} htmlFor="gender">Gender</label>
                </div>
                <div className={styles.checkboxContainer}>
                  <input className={styles.formInput} type="checkbox" id="dob" />
                  <label className={styles.jLabel} htmlFor="dob">Date Of Birth</label>
                </div>
                <div className={styles.checkboxContainer}>
                  <input className={styles.formInput} type="checkbox" id="country" />
                  <label className={styles.jLabel} htmlFor="country">Country</label>
                </div>
              </div>
              <h5>Need to show option ?</h5>
              <div className={styles.checkboxGroup}>
                <div className={styles.checkboxContainer}>
                  <input className={styles.formInput} type="checkbox" id="profileImage" />
                  <label className={styles.jLabel} htmlFor="profileImage">Profile Image</label>
                </div>
                <div className={styles.checkboxContainer}>
                  <input className={styles.formInput} type="checkbox" id="resume" />
                  <label className={styles.jLabel} htmlFor="resume">Resume</label>
                </div>
                <div className={styles.checkboxContainer}>
                  <input className={styles.formInput} type="checkbox" id="coverLetter" />
                  <label className={styles.jLabel} htmlFor="coverLetter">Cover Letter</label>
                </div>
                <div className={styles.checkboxContainer}>
                  <input className={styles.formInput} type="checkbox" id="terms" />
                  <label className={styles.jLabel} htmlFor="terms">Terms And Conditions</label>
                </div>
              </div>
              <h5>Custom Question</h5>
              <div className={styles.checkboxGroup}>
                <div className={styles.checkboxContainer}>
                  <input className={styles.formInput} type="checkbox" id="weaknesses" />
                  <label className={styles.jLabel} htmlFor="weaknesses">What Do You Consider to Be Your Weaknesses?</label>
                </div>
                <div className={styles.checkboxContainer}>
                  <input className={styles.formInput} type="checkbox" id="whyJob" />
                  <label className={styles.jLabel} htmlFor="whyJob">Why Do You Want This Job?</label>
                </div>
                <div className={styles.checkboxContainer}>
                  <input className={styles.formInput} type="checkbox" id="whyCompany" />
                  <label className={styles.jLabel} htmlFor="whyCompany">Why Do You Want to Work at This Company?</label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
