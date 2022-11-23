import React from "react";
import Ongoing from "../../components/ongoing/Ongoing";
import Layout from "../../layout/Layout";
export default function index() {
  return (
    <div className="h-screen relative">
      <Layout>
        <Ongoing />
      </Layout>
    </div>
  );
}
