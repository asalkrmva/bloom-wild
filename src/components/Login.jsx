import { useState } from 'react';

const Login = ({ setIsLoginOpen, login }) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        if (!name.trim()) {
            alert('Enter username');
            return;
        }

        login(name.trim(), password);
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

            <div className="bg-white w-[90%] max-w-[400px] rounded-lg p-8 relative">

                <button
                    onClick={() => setIsLoginOpen(false)}
                    className="absolute top-4 right-5 text-2xl cursor-pointer"
                >
                    ×
                </button>

                <h2 className="text-3xl font-semibold mb-6 font-serif">
                    Log in
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                >

                    <input
                        type="text"
                        placeholder="Username"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        minLength={3}
                        maxLength={25}
                        pattern="[A-Za-z0-9_ ]+"
                        title="Username must be 3-25 characters and can only contain letters, numbers, and underscores."
                        className="border border-gray-400 rounded px-4 py-3"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength={6}
                        maxLength={30}
                        pattern="\S+"
                        title="Password cannot contain spaces."
                        className="border border-gray-400 rounded px-4 py-3"
                    />

                    <button
                        type="submit"
                        className="bg-black text-white py-3 rounded cursor-pointer"
                    >
                        Log in
                    </button>

                </form>

            </div>

        </div>
    );
};

export default Login;