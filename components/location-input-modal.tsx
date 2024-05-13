import { locationListState } from "@/lib/atoms";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useSetRecoilState } from "recoil";
import { nanoid } from "nanoid";

type LocationInputModalProps = {
  id: string;
  characterName: string;
  show: boolean;
  setShow: (show: boolean) => void;
  initialValue?: string;
};

export default function LocationInputModal({
  characterName,
  id,
  show,
  setShow,
}: LocationInputModalProps) {
  const [location, setLocation] = useState("");
  const setLocationList = useSetRecoilState(locationListState);

  const addLocation = () => {
    if (!location) return;

    setLocationList((prev) => {
      let uId = nanoid();
      const locPrev = prev.find((loc) => loc.location === location);

      if (locPrev) {
        uId = locPrev.uId;
      }

      return [
        ...prev.filter((loc) => loc.id !== id),
        { id, name: characterName, location, uId },
      ];
    });

    setShow(false);
  };

  return (
    <div>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Location for {characterName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            id="location-form"
            onSubmit={(e) => {
              e.preventDefault();
              addLocation();
            }}
          >
            <Form.Control
              type="text"
              placeholder="Enter a location"
              id="location"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button type="submit" form="location-form" className="btn-black">
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
