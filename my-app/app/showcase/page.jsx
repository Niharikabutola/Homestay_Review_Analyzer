"use client";

import { useState } from "react";
import {
  Button,
  Input,
  Loader,
  Toast,
  Modal,
} from "@/components/UI";

export default function ShowcasePage() {
  const [toast, setToast] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const showToast = () => {
    setToast("Component works successfully!");

    setTimeout(() => {
      setToast("");
    }, 3000);
  };

  return (
    <main className="max-w-4xl mx-auto p-8 space-y-10">

      <h1 className="text-4xl font-bold">
        UI Components Showcase
      </h1>

      <p className="text-gray-600">
        This page demonstrates all reusable UI components used in the
        Homestay Review Analyzer project.
      </p>

      {/* Buttons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Button
        </h2>

        <Button>
          Primary Button
        </Button>
      </section>

      {/* Input */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Input
        </h2>

        <Input
          type="text"
          placeholder="Enter your name..."
        />
      </section>

      {/* Loader */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Loader
        </h2>

        <Loader />
      </section>

      {/* Toast */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Toast
        </h2>

        <Button onClick={showToast}>
          Show Toast
        </Button>

        <Toast
          message={toast}
          type="success"
        />
      </section>

      {/* Modal */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Modal
        </h2>

        <Button onClick={() => setModalOpen(true)}>
          Open Modal
        </Button>

        <Modal
          open={modalOpen}
          title="Confirmation"
          onClose={() => setModalOpen(false)}
        >
          <p className="mb-4">
            This is a reusable modal component.
          </p>

          <Button onClick={() => setModalOpen(false)}>
            Close
          </Button>
        </Modal>
      </section>

    </main>
  );
}